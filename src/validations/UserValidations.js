import User from '../models/User'

// eslint-disable-next-line import/prefer-default-export
export async function newContactValidation(data) {
  const errors = []
  const { newContactEmail, currentUser } = data

  if (!newContactEmail) errors.push('New contact email is required')

  if (newContactEmail === currentUser.email)
    errors.push("You can't add yourself as a contact")

  if (currentUser.contacts.includes(newContactEmail))
    errors.push(`${newContactEmail} already is your contact`)

  if (errors.length) return { errors }

  const contact = await User.findOne({ email: newContactEmail })
  if (!contact) errors.push("Contact doesn't exists")

  return { errors, newContactEmail, currentUser }
}
