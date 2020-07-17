import { expect } from 'chai'
import sinon from 'sinon'
import faker from 'faker'
import AuthController from '../AuthController'
import User from '../../models/User'

describe.only('Auth Controller', () => {
  const { register } = AuthController
  describe('register', () => {
    it('should exist', () => expect(register).to.exist)
    it('should be a function', () => expect(register).to.be.a('function'))

    const fakeUser = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(8),
    }

    it('????????????', async () => {
      const stub = sinon.stub(User, 'findOne').returns(fakeUser)
      const user = await register(fakeUser) // <-- Errado, tem q usar o router??
      expect(stub.calledOnce).to.be.true
      expect(user.id).to.equal(fakeUser.id)
      expect(user.name).to.equal(fakeUser.name)
      expect(user.email).to.equal(fakeUser.email)
    })
  })
})
