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
};