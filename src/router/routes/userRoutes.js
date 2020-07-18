import Router from 'express'
import UserController from '../../controllers/UserController'
import { isAuthorized } from '../../middleware/auth'

const route = new Router()

const userRoutes = [
  route.get('/users', UserController.getAllUsers),
  route.post('/new-contact', isAuthorized, UserController.addNewContact),
]

export default userRoutes
