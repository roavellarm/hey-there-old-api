import { isEmail, isPassword, isUser } from '../utils'

export async function registerValidation(data) {
  const errors = []
  const { name, email, password } = data
  if (!name) errors.push('Name is required')
  if (!email) errors.push('Email is required')
  if (!isEmail(email)) errors.push('Email is invalid')
  if (!password) errors.push('Password is required')
  if (!isPassword(password))
    errors.push('Password must have 8 digits, uppercase, lowercase and numbers')

  const result = isUser(email)
  if (result) errors.push('Email already exists')

  return errors
}

export async function loginValidation(data) {
  const errors = []
  const { email, password } = data
  if (!email) errors.push('Email is required to login')
  if (!isEmail(email)) errors.push('Email is Invalid')
  if (!password) errors.push('Password is required to login')
  if (!isPassword(password)) {
    errors.push('Password must have 8 digits, uppercase, lowercase and numbers')
  }
  if (errors.length) return errors

  const result = await isUser(data)
  if (!result) errors.push('Email or password incorrect')

  return errors
}
