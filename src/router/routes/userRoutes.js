import Router from 'express'
import multer from 'multer'
import UserController from '../../controllers/UserController'
import { isAuthorized } from '../../middleware/auth'
import multerConfig from '../../config/multer'
import Image from '../../models/Image'

const route = new Router()

const userRoutes = [
  route.get('/users', UserController.getAllUsers),
  route.post('/new-contact', isAuthorized, UserController.addNewContact),
  route.put(
    '/upload-image',
    isAuthorized,
    multer(multerConfig).single('file'),
    UserController.uploadImage
  ),
  route.get('/images', UserController.getAllImages),
  route.delete('/images/:id', UserController.deleteImage),

  // Temporary: Delete this after ending image stuffs
  route.delete('/images', async (req, res) => {
    await Image.deleteMany({})
    res.send({ message: 'imagens deletadas' })
  }),
]

export default userRoutes
