import Chat from '../models/Chat'
import User from '../models/User'
import {
  createChatValidations,
  sendMessageValidations,
  getMessagesValidations,
} from '../validations/ChatValidations'

function excludeIdsFromData(chat) {
  return {
    chatId: chat.chatId,
    users: chat.users,
    messages: chat.messages.map((msg) => {
      return { message: msg.message }
    }),
  }
}

async function updateUserChatList(email, chatId) {
  const user = await User.findOne({ email })
  user.chatList.push(chatId)
  return user.save()
}

async function createChat(req, res) {
  try {
    const errors = await createChatValidations(req.body)
    if (errors.length) return res.status(400).send({ error: errors })

    const data = {
      chatId: req.body.chatId,
      users: req.body.users,
    }
    const chat = await Chat.create(data)

    req.body.users.map((userEmail) => updateUserChatList(userEmail, chat.id))

    return res.status(201).send({ message: 'Chat create successfuly!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function sendMessage(req, res) {
  try {
    const chatId = req.params.id
    const { errors, chat, content, author } = await sendMessageValidations(
      chatId,
      req.body
    )
    if (errors.length) return res.status(400).send({ error: errors })

    chat.messages.push({ message: { content, author } })
    chat.save()

    return res.status(200).send({ data: excludeIdsFromData(chat) })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function getMessages(req, res) {
  try {
    const { errors, chat } = await getMessagesValidations(
      req.params.id,
      req.body.currentUser
    )
    if (errors.length) return res.status(400).send({ error: errors })

    return res.status(200).send(excludeIdsFromData(chat))
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { createChat, sendMessage, getMessages }
