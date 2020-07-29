import Chat from '../models/Chat'
import { isUser } from '../utils'

export async function createChatValidations(data) {
  const errors = []
  const { chatId, users, currentUser } = data

  if (!chatId) errors.push("Chat name can't be empty")
  if (users.length < 2) errors.push('Must have at least two users')
  if (!users.includes(currentUser.email))
    errors.push('Current user must be in the list')
  if (errors.length) return errors

  const chat = await Chat.findOne({ chatId })
  if (chat) errors.push('Chat already exist')

  await Promise.all(
    users.map(async (email) => {
      const result = await isUser({ email })
      if (!result) errors.push('User not register in the system')
      return null
    })
  )

  return errors
}

export async function sendMessageValidations(chatId, body) {
  const errors = []
  const { author, currentUser, content } = body

  if (currentUser.email !== author) errors.push("Can't identify user origin")
  if (!content) errors.push("Message can't be empty")
  if (typeof content !== 'string') errors.push('Content must be string')
  if (errors.length) return { errors }

  const chat = await Chat.findOne({ chatId })
  if (!chat) errors.push("Chat doesn't exist")

  return { errors, chat, author, content }
}

export async function getMessagesValidations(chatId, currentUser) {
  const errors = []
  const chat = await Chat.findOne({ chatId })
  if (!chat) {
    errors.push("Chat doesn't exist")
    return { errors }
  }

  if (!chat.users.includes(currentUser.email))
    errors.push('Not allowed to access this chat')

  return { errors, chat }
}
