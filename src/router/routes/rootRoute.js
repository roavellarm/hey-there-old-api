import Router from 'express'

const route = new Router()

const data = { title: 'Hey There API', apiVersion: '0.0.0' }

const rootRoute = route.get('/', (req, res) => res.status(200).send(data))

export default rootRoute
