import md5 from 'md5'
import jwt from 'jsonwebtoken'
import User from '../models/User'

export function encryptPassword(password) {
  return md5(password, process.env.GLOBAL_SAL_KEY)
}

export function isEmail(email) {
  // eslint-disable-next-line no-useless-escape
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

export function isPassword(password) {
  const valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
  if (valid.test(password)) return true
  return false
}

export async function generateToken(data) {
  const { email, password } = data
  return jwt.sign({ email, password }, process.env.GLOBAL_SAL_KEY, {
    expiresIn: '1d',
  })
}

export async function decodeToken(token) {
  return jwt.decode(token, process.env.SALT_KEY)
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.SALT_KEY, (error, decode) => {
    if (error) return error
    return decode
  })
}

export async function isUser(data) {
  const { email, password } = data
  const user = await User.findOne(
    password ? { email, password: encryptPassword(password) } : { email }
  )

  if (!user) return false
  return true
}
