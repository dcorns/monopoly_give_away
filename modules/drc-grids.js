/**
 * drc-grids
 * Created by dcorns on 4/4/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
module.exports = {
  getRowStrings: (row) => {
    if(!(Array.isArray(row))) throw new TypeError('Input must be an array');
    return row.filter(r => typeof r === 'string');
  },
  rowsEqual: (r1, r2) => {
    if(!(Array.isArray(r1)) || !(Array.isArray(r2))) throw new TypeError('Input must be two arrays');
    if(!(r1.length === r2.length)) return false;
    if(r1.length < 100) {
      return  r1.reduce((out, r) => {
        return out && (r === r2[r1.indexOf(r)]);
      }, true);
    }
    else throw new TypeError('Arrays are too large');
  },
};