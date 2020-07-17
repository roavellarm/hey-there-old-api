import { expect } from 'chai'
import UserController from '../UserController'

describe('User Controller', () => {
  const { getAllUsers } = UserController
  describe('getAllUsers', () => {
    it('should have a getAllUsers action', () => expect(getAllUsers).to.exist)
    it('should be a function', () => expect(getAllUsers).to.be.a('function'))
  })
})
