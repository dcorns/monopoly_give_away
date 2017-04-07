/**
 * drc-grids
 * Created by dcorns on 4/4/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
const rowsEqual = (r1, r2) =>{
  if(!(Array.isArray(r1)) || !(Array.isArray(r2))) throw new TypeError('Input must be two arrays');
  if(!(r1.length === r2.length)) return false;
  if(r1.length < 100) {
    return  r1.reduce((out, r) => {
      return out && (r === r2[r1.indexOf(r)]);
    }, true);
  }
  //Implement code to efficiently handle large arrays by dividing into chunks to test equality without always traversing the entire array.
  else throw new TypeError('Arrays are too large');
};
const isGrid = (grid) => {
  if(!Array.isArray(grid)) return false;
  return grid.reduce((result, g) => {
    return result && Array.isArray(g);
  }, true);
};


module.exports = {
  getRowStrings: (row) => {
    if(!(Array.isArray(row))) throw new TypeError('Input must be an array');
    return row.filter(r => typeof r === 'string');
  },
  rowsEqual: rowsEqual,
  getRowIdxFromRow: function getRowIdxFromRow(grid, row){
    if(!(Array.isArray(grid)) || !(Array.isArray(row))) throw new TypeError('Input must be 2dimArray, Array');
    return grid.reduce((out, r, idx) => {
      let x;
      try{
        x = (rowsEqual(r, row)) ? idx + 1 : 0;
      }
      catch (e){
        throw new TypeError('Grid must be a 2 dimensional Array')
      }
      return out + x;
    }, -1);
  },
  getGridRowByColumnData: (grid, columnData) => {
    if(!isGrid(grid)) throw TypeError('Input must be 2dimArray, Any');
    return (grid.find((gridRows) => {
      return gridRows.indexOf(columnData) > -1;
    })) || [];
  },
  isGrid: isGrid,
};