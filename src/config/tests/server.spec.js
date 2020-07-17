import { expect, util } from 'chai'
import startServer from '../server'

describe('startServer', () => {
  describe('Smoke tests', () => {
    it('should exist', () => expect(startServer).to.exist)
    it('should be a function', () => expect(startServer).to.be.a('function'))
  })

  context('when there is no PORT setted in the params', () => {
    it('should throw an error message', () => {
      expect(() => startServer()).to.throw(/Port is required to start server/)
    })
  })

  context('when there is no routes setted in the params', () => {
    it('should throw an error message', () => {
      expect(() => startServer(3000)).to.be.throw(
        /Routes are required to start server/
      )
    })
  })
})
