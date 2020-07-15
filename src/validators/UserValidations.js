import User from '../models/User'

function isEmail(email) {
  // eslint-disable-next-line no-useless-escape
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function validatePassword(password) {
  const valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
  if (valid.test(password)) return true
  return false
}

// eslint-disable-next-line import/prefer-default-export
export async function registerValidation(data) {
  const errors = []
  const { name, email, password } = data
  if (!name) errors.push('Name is required')
  if (!email) errors.push('Email is required')
  if (!isEmail(email)) errors.push('Email is invalid')
  if (!password) errors.push('Password is required')
  if (!validatePassword(password))
    errors.push('Password must have 8 digits, uppercase, lowercase and numbers')

  const user = await User.findOne({ email })
  if (user) errors.push('Email already exists')

  return errors
}
