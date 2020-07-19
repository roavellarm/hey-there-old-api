import { expect } from 'chai'
import UserController from '../UserController'

describe('User Controller', () => {
  describe('getAllUsers', () => {
    const { getAllUsers } = UserController
    it('should have a getAllUsers action', () => expect(getAllUsers).to.exist)
    it('should be a function', () => expect(getAllUsers).to.be.a('function'))
  })

  describe('addNewController', () => {
    const { addNewContact } = UserController
    it('should have a AddNewContact action', () =>
      expect(addNewContact).to.exist)
    it('should be a function', () => expect(addNewContact).to.be.a('function'))

    // context('when the user is loged with correct params', () => {
    //   it('should return status ok (200)', () => {
    //     expect(addNewContact(req, re))
    //   })
    // })
  })
})
