import Router from 'express'
import ChatController from '../../controllers/ChatController'
import { isAuthorized } from '../../middleware/auth'

const route = new Router()

const chatRoutes = [
  route.post('/chat', isAuthorized, ChatController.createChat),
  route.post('/chat/:id', isAuthorized, ChatController.sendMessage),
  route.get('/chat/:id', isAuthorized, ChatController.getMessages),
  route.get('/chat-info/:id', isAuthorized, ChatController.getChatInfo),
]

export default chatRoutes
