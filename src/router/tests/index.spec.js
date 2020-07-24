import { expect } from 'chai'
import router from '../index'

describe('router', () => {
  describe('Smoke tests', () => {
    it('should exist', () => {
      expect(router).to.exist
    })
  })
})
