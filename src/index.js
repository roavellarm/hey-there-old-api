import dotenv from 'dotenv'
import startServer from './config/server'
import startDatabase from './config/database'
import routesList from './router/index'

dotenv.config()

const { DATABASE, PORT } = process.env

startDatabase(DATABASE)

startServer(PORT, routesList)

export default { startServer }
