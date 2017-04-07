'use strict';
const expect = require('chai').expect;

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
      testThrowIfNot2ArrayArguments(drcGrids.rowsEqual, /Input must be two arrays/);
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
    it('returns -1 if grid and row are empty arrays', () => {
      expect(drcGrids.getRowIdxFromRow([], [])).to.equal(-1);
      expect(drcGrids.getRowIdxFromRow([], [[]])).to.equal(-1);
    });
    it('Throws TypeError if not passed two arrays', () => {
      testThrowIfNot2ArrayArguments(drcGrids.getRowIdxFromRow, /Input must be 2dimArray, Array/);
    });
    it('Throws TypeError if grid is not a 2dimArray', () => {
      expect(() => drcGrids.getRowIdxFromRow(['a', 'b'], ['a', 'b'])).to.throw(TypeError, /Grid must be a 2 dimensional Array/);
    });
  });
  describe('getGridRowByColumnData(grid, columnData)', () => {
    it('returns row from a grid based on one of the row column\'s data (columnData)', () => {
      expect(drcGrids.getGridRowByColumnData([[24, 32, 'a'], [43, 21, 56], [73, 'r', {}]], 'r')).to.deep.equal([73, 'r', {}]);
    });
    it('returns [] if the columnData does not exist in any of the grid rows', () => {
      expect(drcGrids.getGridRowByColumnData([[24, 32, 'a'], [43, 21, 56], [73, 'r', {}]], 12)).to.deep.equal([]);
    });
    it('returns [] if the grid is empty', () => {
      expect(drcGrids.getGridRowByColumnData([])).to.deep.equal([]);
      expect(drcGrids.getGridRowByColumnData([[]])).to.deep.equal([]);
      expect(drcGrids.getGridRowByColumnData([[]], 'x')).to.deep.equal([]);
    });
    it('throws TypeError if grid is not an array', () => {
      expect(() => drcGrids.getGridRowByColumnData('x', [])).to.throw(TypeError, /Input must be 2dimArray, Any/);
    });
  });
  describe('isGrid(grid)', () => {
    it('returns true if input is a 2 dimensional array', () => {
      expect(drcGrids.isGrid([[3, 5, 'z'], ['q', 't', 9]])).to.be.true;
    });
    it('returns false if input is not a grid', () => {
      expect(drcGrids.isGrid([3, 5, 'z'])).to.be.false;
    });
    it('returns false if input is not an array', () => {
      expect(drcGrids.isGrid('t')).to.be.false;
      expect(drcGrids.isGrid()).to.be.false;
    });
  });
});

const testThrowIfNot2ArrayArguments = (f, msg) => {
  expect(() => f([])).to.throw(TypeError, msg);
  expect(() => f([], {})).to.throw(TypeError, msg);
  expect(() => f(7, [])).to.throw(TypeError, msg);
  expect(() => f([], 'hello')).to.throw(TypeError, msg);
  expect(() => f()).to.throw(TypeError, msg);
};