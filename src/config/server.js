import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

function startServer(PORT, routes) {
  if (!PORT) throw Error(`Port is required to start server`)
  if (!routes) throw Error(`Routes are required to start server`)

  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(morgan('dev'))
  app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
  )
  app.use(cors())
  app.use('/', routes)

  // eslint-disable-next-line no-console
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

export default startServer
