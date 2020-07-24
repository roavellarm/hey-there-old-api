import User from '../models/User'
import Image from '../models/Image'
import { newContactValidation } from '../validations/UserValidations'

async function getAllUsers(req, res) {
  try {
    const data = await User.find({})

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function uploadImage(req, res) {
  const { originalname: name, size, key, location: url = '' } = req.file

  const image = await Image.create({
    name,
    size,
    key,
    url,
  })
  return res.json(image)
}

async function getAllImages(req, res) {
  const images = await Image.find()
  return res.json(images)
}

async function deleteImage(req, res) {
  const image = await Image.findById(req.params.id)
  await image.remove()
  return res.send()
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

export default {
  getAllUsers,
  uploadImage,
  getAllImages,
  deleteImage,
  addNewContact,
}
