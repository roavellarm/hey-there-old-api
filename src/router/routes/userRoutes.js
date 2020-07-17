import Router from 'express'
import UserController from '../../controllers/UserController'

const route = new Router()

const userRoutes = [
  route.get('/users', UserController.getAllUsers),
  route.post('/new-contact', UserController.addNewContact),
]

export default userRoutes
