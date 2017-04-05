'use strict';
const expect = require ('chai').expect;

const drcGrids = require('../modules/drc-grids');
describe('drc-grids.js', () => {
  describe('getRowStrings', () => {
    it('Input: Array, Output: Array containing only items with string values from input', () => {
      expect(drcGrids.getRowStrings(['f', 108, 'a', 34, 'g', 4, '', 34, 23, 108])).to.deep.equal(['f', 'a', 'g', '']);
    });
    it('It throws a TypeError error for non array input', () => {
      expect(() => drcGrids.getRowStrings(4)).to.throw(TypeError, /Input must be an array/);
      expect(() => drcGrids.getRowStrings()).to.throw(TypeError, /Input must be an array/);
      expect(() => drcGrids.getRowStrings({})).to.throw(TypeError, /Input must be an array/);
      expect(() => drcGrids.getRowStrings('')).to.throw(TypeError, /Input must be an array/);
    });
    it('Returns an empty array if the array does not contain strings', () => {
      expect(drcGrids.getRowStrings([108, 34, 4, 34, 23, 108, {}])).to.deep.equal([]);
    });
  });
});