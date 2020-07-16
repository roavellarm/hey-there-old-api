import { expect } from 'chai'
import { registerValidation } from './UserValidations'

describe('UserValidations', () => {
  describe.only('registerValidation', () => {
    it('should exist', () => expect(registerValidation).to.exist)
    it('should be a function', () =>
      expect(registerValidation).to.be.a('function'))

    it('should return error message when invalid email', (done) => {
      expect(() => registerValidation()).to.be('...')
    })
  })
})
