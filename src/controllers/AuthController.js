import {
  registerValidation,
  loginValidation,
} from '../validations/AuthValidations'
import { encryptPassword, generateToken } from '../utils'
import User from '../models/User'

async function register(req, res) {
  try {
    const errors = await registerValidation(req.body)
    if (errors.length) return res.status(400).send({ error: errors })

    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: encryptPassword(req.body.password),
    })

    return res.status(201).send({ message: 'User created successfuly' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function login(req, res) {
  try {
    const errors = await loginValidation(req.body)
    if (errors.length) return res.status(400).send({ error: errors })

    const token = await generateToken(req.body)

    return res.status(200).send({ token })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { register, login }
