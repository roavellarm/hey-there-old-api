import { expect } from 'chai'
import getAllUsers from '../controllers/UserController'

describe('UserController', () => {
  describe('Smoke tests', () => {
    it('should exists', () => {
      expect(getAllUsers).to.exist
    })
  })
})
