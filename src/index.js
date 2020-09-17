import dotenv from 'dotenv'
import startServer from './config/server'
import startDatabase from './config/database'
import routesList from './router/index'

dotenv.config()

const { DATABASE, PORT, SOCKET_PORT } = process.env

startDatabase(DATABASE)

startServer(PORT, SOCKET_PORT, routesList)

export default { startServer }
