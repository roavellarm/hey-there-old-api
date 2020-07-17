import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import userRoutes from '../userRoutes'

chai.use(chaiHttp)

describe.only('userRoutes', () => {
  describe('Smoke tests', () => {
    it('should exist', () => expect(userRoutes).to.exist)
    it('should be an array', () => expect(userRoutes).to.be.an('array'))
  })

  describe('GET /users', () => {
    it('should return all users in an array', (done) => {
      chai
        .request(userRoutes[0])
        .get('/users')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('array')
          done()
        })
    })
  })

  describe('POST /new-contact', () => {
    it('should register users', (done) => {
      chai
        .request(userRoutes[1])
        .post('/new-contact')
        .end((err, res) => {
          expect(res).to.have.status(201)
          done()
        })
    })
  })
})
