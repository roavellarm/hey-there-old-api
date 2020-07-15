import { expect } from 'chai'
import app from '../src/index'

describe('Index', () => {
  describe('Smoke tests', () => {
    it('should exist', () => {
      expect(app).to.exist
    })
  })
})
