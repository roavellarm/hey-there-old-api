import chai, { expect } from 'chai'
import getAllUsers from '../controllers/UserController'
import Http from 'chai-http'

describe('UserController', () => {
  describe('Smoke tests', () => {
    it('should exists', () => {
      expect(getAllUsers).to.exist
    })
  })
})

chai.use(Http)

describe('Usuario - Endpoints', () => {
  describe('POST /users', () => {
    it('deve retornar usuário criado - 201', (done) => {
      chai
        .request('http://localhost:3001')
        .post('users')
        .send('User correct')
        .end((err, res) => {
          chai.assert.isNull(err)
          chai.assert.isNotEmpty(res.body)
          res.should.have.status(201)
          res.body.should.have.property('error').equal(0)
          res.body.payload.comments.should.have.property('name')
          res.body.payload.comments.should.have
            .property('name')
            .equal(USUARIO_VALIDO.name)
          done()
        })
    })
  })
})
