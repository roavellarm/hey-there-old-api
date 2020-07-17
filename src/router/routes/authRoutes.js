import Router from 'express'
import AuthController from '../../controllers/AuthController'

const route = new Router()

const userRoutes = [route.post('/register', AuthController.register)]

export default userRoutes
