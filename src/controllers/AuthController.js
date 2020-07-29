import {
  registerValidation,
  loginValidation,
} from '../validations/AuthValidations'
import { generateToken, verifyToken, createUser } from '../utils'

async function register(req, res) {
  try {
    const { errors, googleUser, user } = await registerValidation(req.body)
    if (errors.length) return res.status(400).send({ error: errors })

    const token = await generateToken(req.body)

    if (googleUser) return res.status(200).send({ token, currentUser: user })

    const newUser = await createUser(req.body)

    return res.status(201).send({ token, currentUser: newUser })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function login(req, res) {
  try {
    const { errors, googleUser, user } = await loginValidation(req.body)
    if (errors.length) return res.status(400).send({ error: errors })

    const token = await generateToken(req.body)

    if (googleUser) {
      const currentUser = await createUser(req.body)
      return res.status(200).send({ token, currentUser })
    }

    return res.status(200).send({ token, currentUser: user })
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
