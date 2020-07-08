import { expect } from 'chai'
import app from '../src/index'

describe('Index', () => {
  describe('Smoke tests', () => {
    it('should exist', () => {
      expect(app).to.exist
    })
    it('should be a function', () => {
      expect(app).to.be.a('function')
    })
  })
})
