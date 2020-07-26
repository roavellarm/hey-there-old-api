import authRoutes from './routes/authRoutes'
import rootRoute from './routes/rootRoute'
import userRoutes from './routes/userRoutes'
import chatRoutes from './routes/chatRoutes'

const routesList = [rootRoute, ...authRoutes, ...userRoutes, ...chatRoutes]

export default routesList
