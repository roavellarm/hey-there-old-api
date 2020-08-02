import { isEmail, isPassword, isUser } from '../utils'

export async function registerValidation(data) {
  const errors = []
  const { name, email, password } = data
  if (!name) errors.push('Name is required')
  if (!email) errors.push('Email is required')
  if (!isEmail(email)) errors.push('Email is invalid')
  if (!password) errors.push('Password is required')
  if (!isPassword(password)) {
    errors.push('Password must have 8 digits, uppercase, lowercase and numbers')
  }
  if (errors.length) return { errors }

  const user = await isUser({ email })

  if (user && password.includes('@HeyThere') && !errors.length) {
    const googleUser = true
    return { errors, googleUser, user }
  }

  if (user) errors.push('User already registered')

  return { errors }
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
  if (errors.length) return { errors }

  const user = await isUser(data)

  if (!user && password.includes('@HeyThere') && !errors.length) {
    const googleUser = true
    return { errors, googleUser }
  }

  if (!user) errors.push('Email or password incorrect')

  return { errors, user }
}
