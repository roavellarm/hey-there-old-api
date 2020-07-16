import { expect } from 'chai'
import userModel from './User'

describe('userModel', () => {
  // it('should exist', () => expect(User).to.exist)
  // it('should be a function', () => expect(User).to.be.a('function'))
  it('should have a name', () => expect(userModel).to.have.property('name'))
  it('should have a email', () => expect(userModel).to.have.property('email'))
  it('should have a password', () =>
    expect(userModel).to.have.property('password'))
})

// Existe
// tem que ser uma função
// tem que ter o atributo name
// tem que ter o atributo email
// tem que ter o atributo password
