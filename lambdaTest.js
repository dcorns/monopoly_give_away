/**
 * lambdaTest
 * Created by dcorns on 4/25/17
 * Copyright © 2017 Dale Corns
 * MIT Licensed
 */
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.use(express.static(__dirname + '/public'));
app.get('/allPrizeData', function(req, res){
  https.get('https://monopoly-d9e3c.firebaseio.com/dcorns/data.json', (fbres) => {
    fbres.on('data', (d) => {
      process.stdout.write(d);
      res.json(d.toString());
    }).
    on('error', (e) => {
      res.status(404);
      res.json(e);
    });
  });
});

app.post('/updatePrize', function(req, res){
  corngoose.dbDocUpdate({name: req.body.name, value: req.body.value},req.body,'prizes',function(err, data){
    if (err){
      res.status(400);
      res.contentType = 'json';
      res.send(err);
      return null;
    }
    res.status(200);
    res.contentType = 'json';
    res.send(data);
  });
});

const server = app.listen(port, 'localhost', function(){
  console.log('Server listening on port ' + port);
});