import { expect } from 'chai'
import Contact from '../Contact'

describe('Contact', () => {
  const contact = new Contact()

  it('should exists', () => {
    expect(Contact).to.exist
  })
  it('should be a function', () => {
    expect(Contact).to.be.a('function')
  })
  it('should have an userId property', () => {
    expect(contact).to.have.property('userId')
  })
  it('should have a contactsEmails property', () => {
    expect(contact).to.have.property('contactsEmails')
  })
})
