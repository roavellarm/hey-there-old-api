import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import rootRoute from '../rootRoute'

chai.use(chaiHttp)

describe('rootRoute', () => {
  describe('Smoke tests', () => {
    it('should exist', () => expect(rootRoute).to.exist)
    it('should be a function', () => expect(rootRoute).to.be.a('function'))
  })

  describe('GET /', () => {
    it('should get a JSON with the app title and API version', (done) => {
      chai
        .request(rootRoute)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          done()
        })
    })
  })
})
