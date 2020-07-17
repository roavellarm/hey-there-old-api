import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import authRoutes from '../authRoutes'

chai.use(chaiHttp)

describe('authRoutes', () => {
  describe('Smoke tests', () => {
    it('should exist', () => expect(authRoutes).to.exist)
    it('should be an array', () => expect(authRoutes).to.be.an('array'))
  })

  describe('POST /register', () => {
    it('should exist', () => expect(authRoutes[0]).to.exist)
    it('should be a function', () => expect(authRoutes[0]).to.be.an('function'))

    // it('should return status created (201)', (done) => {
    //   chai
    //     .request(authRoutes[0])
    //     .post('/register')
    //     .send({
    //       name: 'Foo',
    //       email: 'foo@bar.com',
    //       password: 'FooBar@123',
    //     })
    //     .end(function (err, res) {
    //       expect(err).to.be.null
    //       expect(res).to.have.status(201)
    //       done()
    //     })
    // })
  })
})
