import md5 from 'md5'
import { registerValidation } from '../validations/AuthValidations'
import User from '../models/User'

async function register(req, res) {
  try {
    const errors = await registerValidation(req.body)
    if (errors.length) return res.status(400).json({ error: errors })

    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SAL_KEY),
    })

    return res.status(201).json({ message: 'User created successfuly' })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export default { register }
