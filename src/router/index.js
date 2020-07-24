import authRoutes from './routes/authRoutes'
import rootRoute from './routes/rootRoute'
import userRoutes from './routes/userRoutes'

const routesList = [rootRoute, ...authRoutes, ...userRoutes]

export default routesList
