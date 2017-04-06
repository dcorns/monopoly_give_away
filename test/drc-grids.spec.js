'use strict';
const expect = require ('chai').expect;

const drcGrids = require('../modules/drc-grids');
describe('drc-grids.js', () => {

  describe('getRowStrings(row)', () => {
    it('Returns an array of the strings contained in row', () => {
      expect(drcGrids.getRowStrings(['f', 108, 'a', 34, 'g', 4, '', 34, 23, 108])).to.deep.equal(['f', 'a', 'g', '']);
    });
    it('It throws a TypeError error for non array input', () => {
      expect(() => drcGrids.getRowStrings(4)).to.throw(TypeError, /Input must be an array/);
      expect(() => drcGrids.getRowStrings()).to.throw(TypeError, /Input must be an array/);
      expect(() => drcGrids.getRowStrings({})).to.throw(TypeError, /Input must be an array/);
      expect(() => drcGrids.getRowStrings('')).to.throw(TypeError, /Input must be an array/);
    });
    it('Returns an empty array if the row does not contain strings', () => {
      expect(drcGrids.getRowStrings([108, 34, 4, 34, 23, 108, {}])).to.deep.equal([]);
    });
  });
  describe('rowsEqual(row, row)', () => {
    it('Returns true if two arrays are given as input and they are equal', () => {
      expect(drcGrids.rowsEqual([34, 5, 's', 'hello'], [34, 5, 's', 'hello'])).to.be.true;
      expect(drcGrids.rowsEqual([], [])).to.be.true;
    });
    it('Returns false if two arrays inputs are not equal', () => {
      expect(drcGrids.rowsEqual([34, 5, 's', 'hello'], [34, 5, 's', 'hello'].reverse())).to.be.false;
      expect(drcGrids.rowsEqual([34, 5, 's', 'hello'], [34, 5, 's', 'hello world'])).to.be.false;
      expect(drcGrids.rowsEqual([34, 5, 's', 'hello'], [34, 5, 's', 'hello', 'plus one'])).to.be.false;
    });
    it('Throws a TypeError if input is not two arrays', () => {
      expect(() => drcGrids.rowsEqual([])).to.throw(TypeError, /Input must be two arrays/);
      expect(() => drcGrids.rowsEqual([],{})).to.throw(TypeError, /Input must be two arrays/);
      expect(() => drcGrids.rowsEqual(7,[])).to.throw(TypeError, /Input must be two arrays/);
      expect(() => drcGrids.rowsEqual([],'hello')).to.throw(TypeError, /Input must be two arrays/);
    });
  });
  describe('getRowIdxFromRow(grid, row)', () => {
    it('Returns the Y index of the row if it exists in the grid', () => {
      expect(drcGrids.getRowIdxFromRow([
        ['x', 2, 'g', 5, 'r', 9],
        ['x1', 2, 'g1', 5, 'r1', 9],
        ['x2', 2, 'g2', 5, 'r2', 9],
        ['x3', 2, 'g3', 5, 'r3', 9]
      ],
        ['x2', 2, 'g2', 5, 'r2', 9])).to.equal(2);
    });
    it('Returns -1 if row does not exist in grid', () => {
      expect(drcGrids.getRowIdxFromRow([
          ['x', 2, 'g', 5, 'r', 9],
          ['x1', 2, 'g1', 5, 'r1', 9],
          ['x2', 2, 'g2', 5, 'r2', 9],
          ['x3', 2, 'g3', 5, 'r3', 9]
        ],
        ['noMatch', 2, 'g2', 5, 'r2', 9])).to.equal(-1);
      expect(drcGrids.getRowIdxFromRow([
          ['x', 2, 'g', 5, 'r', 9],
          ['x1', 2, 'g1', 5, 'r1', 9],
          ['x2', 2, 'g2', 5, 'r2', 9],
          ['x3', 2, 'g3', 5, 'r3', 9]
        ],
        ['x2', 2, 'g2', 5, 'r2', 9, 'to long'])).to.equal(-1);
      expect(drcGrids.getRowIdxFromRow([
          ['x', 2, 'g', 5, 'r', 9],
          ['x1', 2, 'g1', 5, 'r1', 9],
          ['x2', 2, 'g2', 5, 'r2', 9],
          ['x3', 2, 'g3', 5, 'r3', 9]
        ],
        ['x2', 2, 'g2', 5, 'r2', 9].reverse())).to.equal(-1);
    });
    // it('Throws a type error if parameters are incorrect or missing', () => {
    //   it('Throws for 0 to 1 arguments passed', () => {
    //     expect(() => drcGrids.getRowIdxFromRow()).to.throw(TypeError, /Input must be (2dim Array, Array)/);
    //     expect(() => drcGrids.getRowIdxFromRow([], [])).to.throw(TypeError, /Input must be (2dim Array, Array)/);
    //   });
    // });
  });
});