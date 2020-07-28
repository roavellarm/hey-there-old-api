import {
  registerValidation,
  loginValidation,
} from '../validations/AuthValidations'
import { encryptPassword, generateToken, verifyToken } from '../utils'
import User from '../models/User'

async function register(req, res) {
  try {
    const { errors, googleUser } = await registerValidation(req.body)
    if (errors.length) return res.status(400).send({ error: errors })

    if (googleUser) {
      const token = await generateToken(req.body)
      return res.status(200).send({ token })
    }

    await User.create({
      name: req.body.name,
      email: req.body.email,
      avatar: req.body.avatar || null,
      password: encryptPassword(req.body.password),
    })

    return res.status(201).send({ message: 'User created successfuly' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function login(req, res) {
  try {
    const { errors, googleUser } = await loginValidation(req.body)
    if (errors.length) return res.status(400).send({ error: errors })

    if (googleUser) {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        avatar: req.body.avatar,
        password: encryptPassword(req.body.password),
      })
    }

    const token = await generateToken(req.body)

    return res.status(200).send({ token })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function isValidToken(req, res) {
  try {
    const { decode, error } = await verifyToken(req.body.token)
    if (error && !decode) return res.status(200).send({ isValidToken: false })

    return res.status(200).send({ isValidToken: true })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { register, login, isValidToken }
