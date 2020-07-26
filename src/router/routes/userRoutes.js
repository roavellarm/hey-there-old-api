import Router from 'express'
import UserController from '../../controllers/UserController'
import { isAuthorized } from '../../middleware/auth'
import imageUploader from '../../config/blobStorage'

const route = new Router()

const userRoutes = [
  route.get('/users', UserController.getAllUsers),
  route.post('/new-contact', isAuthorized, UserController.addNewContact),
  route.post(
    '/upload-image',
    isAuthorized,
    imageUploader(),
    UserController.uploadImage
  ),
  route.get('/images', UserController.getAllImages),
  route.delete('/images/:id', UserController.deleteImage),
]

export default userRoutes
