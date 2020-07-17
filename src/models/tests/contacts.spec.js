import { expect } from 'chai'
import Contacts from '../Contact'

describe('Contacts model', () => {
  const contacts = new Contacts()
  it('should be exists', () => {
    expect(Contacts).to.exist
  })
  it('should be a function', () => {
    expect(Contacts).to.be.a('function')
  })
  it('should have a owner', () => {
    expect(contacts).to.have.property('owner')
  })
  it('should have a owner', () => {
    expect(contacts).to.have.property('contacts')
  })
})
