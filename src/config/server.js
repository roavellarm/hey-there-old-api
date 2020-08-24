/* eslint-disable no-console */
import express from 'express'
import socket from 'socket.io'
import http from 'http'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

function startServer(PORT, IO_PORT, routes) {
  if (!PORT) throw Error(`Port is required to start server`)
  if (!routes) throw Error(`Routes are required to start server`)

  const app = express()
  const server = http.createServer(app)

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(morgan('dev'))
  app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
  )
  app.use(cors())
  app.use('/', routes)

  const io = socket.listen(server)

  io.on('connection', (sock) => {
    console.log('A user is connected :)')

    sock.on('chat message', (msg) => {
      console.log(msg)
      io.emit('chat message', msg)
    })
  })

  server.listen(
    IO_PORT,
    console.log(`Socket server is running on port ${IO_PORT}`)
  )

  app.listen(PORT, () => console.log(`Http server running on port ${PORT}`))
}

export default startServer
