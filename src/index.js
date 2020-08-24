import dotenv from 'dotenv'
import startServer from './config/server'
import startDatabase from './config/database'
import routesList from './router/index'

dotenv.config()

const { DATABASE, PORT, IO_PORT } = process.env

startDatabase(DATABASE)

startServer(PORT, IO_PORT, routesList)

export default { startServer }
