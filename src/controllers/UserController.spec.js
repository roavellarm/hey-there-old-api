import chai, { expect } from 'chai'
import Http from 'chai-http'
import getAllUsers from '../controllers/UserController'

chai.use(Http)

describe('User Controller', () => {
  describe('Smoke tests', () => {
    it('should exists', () => expect(getAllUsers).to.exist)
    it('should be a function', () => expect(getAllUsers).to.be.a('object'))
  })

  describe('POST /users', () => {
    context('whith correct params', () => {
      // before(
      //   // faz a conexão
      // )
      // after(
      //   // desconecta
      // )

      it('should return 201', (done) => {
        chai
          .request('http://localhost:3001')
          .post('/users')
          .send('User correct')
          .end((err, res) => {
            res.should.have.status(201)
            done()
          })
      })
    })
  })
})
