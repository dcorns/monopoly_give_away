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
  describe('rowsEqual', () => {
    it('Returns true if two arrays are given as input and they are equal', () => {
      expect(drcGrids.rowsEqual([34, 5, 's', 'hello'], [34, 5, 's', 'hello'])).to.be.true;
      expect(drcGrids.rowsEqual([], [])).to.be.true;
    });
    it('Returns false if two arrays inputs are not equal', () => {
      expect(drcGrids.rowsEqual([34, 5, 's', 'hello'], [34, 5, 's', 'hello'].reverse())).to.be.false;
      expect(drcGrids.rowsEqual([34, 5, 's', 'hello'], [34, 5, 's', 'hello world'])).to.be.false;
      expect(drcGrids.rowsEqual([34, 5, 's', 'hello'], [34, 5, 's', 'hello', 'plus one'])).to.be.false;
    });
    it('Throws a type error if input is not two arrays', () => {
      expect(() => drcGrids.rowsEqual([])).to.throw(TypeError, /Input must be two arrays/);
      expect(() => drcGrids.rowsEqual([],{})).to.throw(TypeError, /Input must be two arrays/);
      expect(() => drcGrids.rowsEqual(7,[])).to.throw(TypeError, /Input must be two arrays/);
      expect(() => drcGrids.rowsEqual([],'hello')).to.throw(TypeError, /Input must be two arrays/);
    });
  });
});