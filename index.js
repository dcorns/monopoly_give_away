/**
 * index
 * Created by dcorns on 2/27/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


var server = app.listen(port, 'localhost', function(){
  console.log('Server listening on port ' + port);
});