import Router from 'express'
import AuthController from '../../controllers/AuthController'

const route = new Router()

const userRoutes = [
  route.post('/register', AuthController.register),
  route.post('/login', AuthController.login),
  route.post('/verifyToken', AuthController.isValidToken),
]

export default userRoutes
