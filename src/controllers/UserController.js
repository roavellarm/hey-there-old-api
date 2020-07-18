import User from '../models/User'

async function getAllUsers(req, res) {
  try {
    const data = await User.find({})

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function addNewContact(req, res) {
  try {
    // quem é o currentUser? (email/id)
    // quem ele está adicionando? (email/id)

    // verificar se o newContact existe
    // se não existe, retornar mensagem dizendo q usuário não existe

    // se existe, adicionar o email dele na lista de contatos do currentUser

    return res.status(201).send(
      // { CurrentUserName: UserData.name }
      { message: 'testando 123' }
    )
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export default { getAllUsers, addNewContact }
