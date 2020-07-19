import User from '../models/User'
import { newContactValidation } from '../validations/UserValidations'

async function getAllUsers(req, res) {
  try {
    const data = await User.find({})

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function addNewContact(req, res) {
  try {
    const { errors, newContactEmail, currentUser } = await newContactValidation(
      req.body
    )

    if (errors.length) return res.status(400).send({ error: errors })

    currentUser.contacts.push(newContactEmail)
    currentUser.save()

    return res.status(201).send({ message: 'New contact added successfully' })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export default { getAllUsers, addNewContact }
