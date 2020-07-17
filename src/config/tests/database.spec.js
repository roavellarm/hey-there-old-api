import { expect } from 'chai'
import startDatabase from '../database'

describe('startDatabase', () => {
  describe('Smoke tests', () => {
    it('should exist', () => expect(startDatabase).to.exist)
    it('should be a function', () => expect(startDatabase).to.be.a('function'))
  })

  context('when there is no connection string', () => {
    it('should throw an error message', () => {
      expect(startDatabase).to.throw(
        /Connection string is required to start database/
      )
    })
  })
})
