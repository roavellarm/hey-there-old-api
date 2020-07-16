import md5 from 'md5'
import { registerValidation } from '../validators/UserValidations'
import User from '../models/User'

async function getAllUsers(req, res) {
  try {
    const data = await User.find({})

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function register(req, res) {
  try {
    const errors = await registerValidation(req.body)
    if (errors.length) return res.status(400).json({ error: errors })

    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SAL_KEY),
      contacts: req.body.contacts,
    })
    return res.status(200).json({ message: 'User created successfuly' })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

async function addNewContact(req, res) {
  try {
    // DADOS NECESSARIOS: email do currentUser[headers: token], email do newContactUser[body]
    // checar quem é o currentUser
    // ver se o newContactUser existe
    // ver se o newContactUser já não está na lista de contatos do currentUser
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).json({ error: "User doen't exists" })

    return res.status(200).json({ message: 'Contact added successfuly' })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export default { getAllUsers, register, addNewContact }
