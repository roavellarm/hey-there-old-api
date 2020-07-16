import Router from 'express'

const router = new Router()

const data = { title: 'Hey There API', apiVersion: '0.0.0' }

const rootRoute = router.get('/', (req, res) => res.status(200).send(data))

export default rootRoute
