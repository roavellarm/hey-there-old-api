import { expect } from 'chai'
import app from '../src/index'
import routesList from '../src/router/'
import userModel from '../src/models/userModel'
import getAll from '../src/controllers/userController'
import assert from 'assert'

describe('Index', () => {
  describe('Smoke tests', () => {
    it('should exist', () => {
      expect(app).to.exist
    })
  })
})

// routesList exists
describe('routeList', () => {
  describe('Smoke tests', () => {
    it('should exist', () => {
      expect(routesList).to.exist
    })
  })
})

// if model user exists
describe('UserModel', () => {
  describe('Smoke tests', () => {
    it('should exist', () => {
      expect(userModel).to.exist
    })
  })
})

describe('Testes de get do User Controller', function () {
  // verifica se existe getAll do UserController

  describe('Smoke tests', () => {
    it('should exist', () => {
      expect(getAll).to.exist
    })
    // Dentro do tópico criamos os testes relacionados
    // aos mesmos, fazemos isso usando o método it()
    it('O getAll deve ser uma função', function () {
      // Usamos o assert.equal() para verificar se
      // o tipo da variável 'calculadora' realmente
      // é uma função
      assert.equal(typeof getAll, 'function')
    })
  })
})
