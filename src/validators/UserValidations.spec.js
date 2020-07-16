import { expect } from 'chai'
import { registerValidation } from './UserValidations'

describe('UserValidations', () => {
  describe('registerValidation', () => {
    it('should exist', () => {
      expect(registerValidation).to.exist
    })
    it('should be a function', () => {
      expect(registerValidation).to.be.a('function')
    })

    // it('should return error message when invalid email', (donfunction e) {
    //   expect(() => registerValidation()).to.be('...')
    // })
  })
})
