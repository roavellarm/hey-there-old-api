import express from 'express'
import cors from 'cors'

function startServer(PORT, routes) {
  if (!PORT) throw Error(`Port is required to start server`)
  if (!routes) throw Error(`Port is required to start server`)

  const app = express()

  app.use(express.json())
  app.use(cors())
  app.use('/', routes)

  // eslint-disable-next-line no-console
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

export default startServer
