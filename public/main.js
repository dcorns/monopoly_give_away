/**
 * main
 * Created by dcorns on 2/27/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var prizeData = {name:"Cash",value:50,available:5000,startAvailable:5000,tickets:{required:4, partList: ["M555A", 0, "M556B", 0, "M557C", 1, "M558D", 0], winner:''}};
var prizes = document.getElementById("prizes");
var add1 = document.getElementById("add1");
var add2 = document.getElementById("add2");
var add3 = document.getElementById("add3");
var add4 = document.getElementById("add4");
var add5 = document.getElementById("add5");
var add6 = document.getElementById("add6");
var add7 = document.getElementById("add7");
var add8 = document.getElementById("add8");
var minus1 = document.getElementById("minus1");
var minus2 = document.getElementById("minus2");
var minus3 = document.getElementById("minus3");
var minus4 = document.getElementById("minus4");
var minus5 = document.getElementById("minus5");
var minus6 = document.getElementById("minus6");
var minus7 = document.getElementById("minus7");
var minus8 = document.getElementById("minus8");
var part1 = document.getElementById("part1");
var part2 = document.getElementById("part2");
var part3 = document.getElementById("part3");
var part4 = document.getElementById("part4");
var part5 = document.getElementById("part5");
var part6 = document.getElementById("part6");
var part7 = document.getElementById("part7");
var part8 = document.getElementById("part8");
prizes.addEventListener('click', function(e){
  console.log(e.target.id);
  var x = e.target.x.baseVal.value;
  var y = e.target.y.baseVal.value;
  console.dir(x);
  console.dir(y);
  console.dir(e.target.parentNode.attributes[2].value);
  prizes.setAttribute('viewBox', x.toString()+' '+ y.toString()+' '+'100 '+'75');

  add1.setAttribute('cx', (x + 7).toString());
  add1.setAttribute('cy', (y + 32).toString());
  part1.setAttribute('x', (x + 15).toString());
  part1.setAttribute('y', (y + 35).toString());
  minus1.setAttribute('cx', (x + 44).toString());
  minus1.setAttribute('cy', (y + 32).toString());
  add2.setAttribute('cx', (x + 57).toString());
  add2.setAttribute('cy', (y + 32).toString());
  part2.setAttribute('x', (x + 65).toString());
  part2.setAttribute('y', (y + 35).toString());
  minus2.setAttribute('cx', (x + 94).toString());
  minus2.setAttribute('cy', (y + 32).toString());

  add3.setAttribute('cx', (x + 7).toString());
  add3.setAttribute('cy', (y + 45).toString());
  part3.setAttribute('x', (x + 15).toString());
  part3.setAttribute('y', (y + 48).toString());
  minus3.setAttribute('cx', (x + 44).toString());
  minus3.setAttribute('cy', (y + 45).toString());
  add4.setAttribute('cx', (x + 57).toString());
  add4.setAttribute('cy', (y + 45).toString());
  part4.setAttribute('x', (x + 65).toString());
  part4.setAttribute('y', (y + 48).toString());
  minus4.setAttribute('cx', (x + 94).toString());
  minus4.setAttribute('cy', (y + 45).toString());

  add5.setAttribute('cx', (x + 7).toString());
  add5.setAttribute('cy', (y + 58).toString());
  part5.setAttribute('x', (x + 15).toString());
  part5.setAttribute('y', (y + 61).toString());
  minus5.setAttribute('cx', (x + 44).toString());
  minus5.setAttribute('cy', (y + 58).toString());
  add6.setAttribute('cx', (x + 57).toString());
  add6.setAttribute('cy', (y + 58).toString());
  part6.setAttribute('x', (x + 65).toString());
  part6.setAttribute('y', (y + 61).toString());
  minus6.setAttribute('cx', (x + 94).toString());
  minus6.setAttribute('cy', (y + 58).toString());

  add7.setAttribute('cx', (x + 7).toString());
  add7.setAttribute('cy', (y + 71).toString());
  part7.setAttribute('x', (x + 15).toString());
  part7.setAttribute('y', (y + 74).toString());
  minus7.setAttribute('cx', (x + 44).toString());
  minus7.setAttribute('cy', (y + 71).toString());
  add8.setAttribute('cx', (x + 57).toString());
  add8.setAttribute('cy', (y + 71).toString());
  part8.setAttribute('x', (x + 65).toString());
  part8.setAttribute('y', (y + 74).toString());
  minus8.setAttribute('cx', (x + 94).toString());
  minus8.setAttribute('cy', (y + 71).toString());

});