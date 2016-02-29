/**
 * index
 * Created by dcorns on 2/27/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var app = express();
var port = process.env.PORT || 3000;
//var db = mongoClient.connect('mongodb://localhost/monopoly', function(err, db){
//  if(err){
//    console.dir(err);
//  }
//  else{
//    var test = db.collection('prizes').find({}).toArray(function (err, collection) {
//      if (err){
//        return null;
//      }
//      console.dir(collection);
//    });
//  }
//});

app.use(express.static(__dirname + '/public'));

app.get('/allPrizeData', function(req, res){
  var db = mongoClient.connect('mongodb://localhost/monopoly', function(err, db){
  if(err){
    console.dir(err);
  }
  else{
    var test = db.collection('prizes').find({}).toArray(function (err, collection) {
      if (err){
        return null;
      }
      console.dir(collection);
      res.status(200);
      res.contentType = 'json';
      res.send(collection);
    });
  }
});

});


var server = app.listen(port, 'localhost', function(){
  console.log('Server listening on port ' + port);
});