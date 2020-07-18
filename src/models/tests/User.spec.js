import { expect } from 'chai'
import User from '../User'

describe('User', () => {
  const user = new User()
  it('should exist', () => expect(User).to.exist)
  it('should be a function', () => expect(User).to.be.a('function'))
  it('should have a name', () => expect(user).to.have.property('name'))
  it('should have a email', () => expect(user).to.have.property('email'))
  it('should have a password', () => expect(user).to.have.property('password'))
})
