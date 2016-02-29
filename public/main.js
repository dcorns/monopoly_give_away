/**
 * main
 * Created by dcorns on 2/27/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var prizeData = {name:"Cash",value:50,available:5000,startAvailable:5000,tickets:{required:4, partList: ["?619A", 10, "?620B", 0, "?621C", 1, "?622D", 0, "?623E", 0, "?624F", 0, "?625G", 0, "?626H", 2], winner:'?625G'}};
var goBack = document.getElementById("goBack");
var prizes = document.getElementById("prizes");
var winnerTxt = document.getElementById("winnerTxt");
var add0 = document.getElementById("add0");
var add2 = document.getElementById("add2");
var add4 = document.getElementById("add4");
var add6 = document.getElementById("add6");
var add8 = document.getElementById("add8");
var add10 = document.getElementById("add10");
var add12 = document.getElementById("add12");
var add14 = document.getElementById("add14");
var minus0 = document.getElementById("minus0");
var minus2 = document.getElementById("minus2");
var minus4 = document.getElementById("minus4");
var minus6 = document.getElementById("minus6");
var minus8 = document.getElementById("minus8");
var minus10 = document.getElementById("minus10");
var minus12 = document.getElementById("minus12");
var minus14 = document.getElementById("minus14");
var part1 = document.getElementById("part1");
var part2 = document.getElementById("part2");
var part3 = document.getElementById("part3");
var part4 = document.getElementById("part4");
var part5 = document.getElementById("part5");
var part6 = document.getElementById("part6");
var part7 = document.getElementById("part7");
var part8 = document.getElementById("part8");
var addTxt0 = document.getElementById("addTxt0");
var addTxt2 = document.getElementById("addTxt2");
var addTxt4 = document.getElementById("addTxt4");
var addTxt6 = document.getElementById("addTxt6");
var addTxt8 = document.getElementById("addTxt8");
var addTxt10 = document.getElementById("addTxt10");
var addTxt12 = document.getElementById("addTxt12");
var addTxt14 = document.getElementById("addTxt14");
var addC1Xoffset = 7, partC1Xoffset = 15, minusC1Xoffset = 44, addC2Xoffset = 66, partC2Xoffset = 74, minusC2Xoffset = 103;

prizes.addEventListener('click', function(e){
  try{
    switch (e.target.id){
      case 'add0':
        adjustTicketQuantity(addTxt0, 1, 1);
        break;
      case 'add2':
        adjustTicketQuantity(addTxt2, 3, 1);
        break;
      case 'add4':
        adjustTicketQuantity(addTxt4, 5, 1);
        break;
      case 'add6':
        adjustTicketQuantity(addTxt6, 7, 1);
        break;
      case 'add8':
        adjustTicketQuantity(addTxt8, 9, 1);
        break;
      case 'add10':
        adjustTicketQuantity(addTxt10, 11, 1);
        break;
      case 'add12':
        adjustTicketQuantity(addTxt12, 13, 1);
        break;
      case 'add14':
        adjustTicketQuantity(addTxt14, 15, 1);
        break;
      case 'minus0':
        adjustTicketQuantity(addTxt0, 1, -1);
        break;
      case 'minus2':
        adjustTicketQuantity(addTxt2, 3, -1);
        break;
      case 'minus4':
        adjustTicketQuantity(addTxt4, 5, -1);
        break;
      case 'minus6':
        adjustTicketQuantity(addTxt6, 7, -1);
        break;
      case 'minus8':
        adjustTicketQuantity(addTxt8, 9, -1);
        break;
      case 'minus10':
        adjustTicketQuantity(addTxt10, 11, -1);
        break;
      case 'minus12':
        adjustTicketQuantity(addTxt12, 13, -1);
        break;
      case 'minus14':
        adjustTicketQuantity(addTxt14, 15, -1);
        break;
      case 'goBack':
        reset();
        break;
      default:
        var x = e.target.x.baseVal.value;
        var y = e.target.y.baseVal.value;
        prizes.setAttribute('viewBox', (x - 1).toString()+' '+ (y + 4).toString() + ' ' + '112 ' + '75');
        goBack.setAttribute('cx', (x + 105).toString());
        goBack.setAttribute('cy', (y + 5).toString());
        winnerTxt.setAttribute('x', (x + 55).toString());
        winnerTxt.setAttribute('y', (y + 24).toString());
        winnerTxt.textContent = 'Winning Ticket: ' + prizeData.tickets.winner;
        add0.setAttribute('cx', (x + addC1Xoffset).toString());
        add0.setAttribute('cy', (y + 32).toString());
        addTxt0.setAttribute('x', (x + addC1Xoffset).toString());
        addTxt0.setAttribute('y', (y + 34).toString());
        addTxt0.textContent = prizeData.tickets.partList[1];
        part1.setAttribute('x', (x + partC1Xoffset).toString());
        part1.setAttribute('y', (y + 35).toString());
        part1.textContent = prizeData.tickets.partList[0];
        minus0.setAttribute('cx', (x + minusC1Xoffset).toString());
        minus0.setAttribute('cy', (y + 32).toString());

        add2.setAttribute('cx', (x + addC2Xoffset).toString());
        add2.setAttribute('cy', (y + 32).toString());
        addTxt2.setAttribute('x', (x + addC2Xoffset).toString());
        addTxt2.setAttribute('y', (y + 34).toString());
        addTxt2.textContent = prizeData.tickets.partList[3];
        part2.setAttribute('x', (x + partC2Xoffset).toString());
        part2.setAttribute('y', (y + 35).toString());
        part2.textContent = prizeData.tickets.partList[2];
        minus2.setAttribute('cx', (x + minusC2Xoffset).toString());
        minus2.setAttribute('cy', (y + 32).toString());

        add4.setAttribute('cx', (x + addC1Xoffset).toString());
        add4.setAttribute('cy', (y + 45).toString());
        addTxt4.setAttribute('x', (x + addC1Xoffset).toString());
        addTxt4.setAttribute('y', (y + 47).toString());
        addTxt4.textContent = prizeData.tickets.partList[5];
        part3.setAttribute('x', (x + partC1Xoffset).toString());
        part3.setAttribute('y', (y + 48).toString());
        part3.textContent = prizeData.tickets.partList[4];
        minus4.setAttribute('cx', (x + minusC1Xoffset).toString());
        minus4.setAttribute('cy', (y + 45).toString());

        add6.setAttribute('cx', (x + addC2Xoffset).toString());
        add6.setAttribute('cy', (y + 45).toString());
        addTxt6.setAttribute('x', (x + addC2Xoffset).toString());
        addTxt6.setAttribute('y', (y + 47).toString());
        addTxt6.textContent = prizeData.tickets.partList[7];
        part4.setAttribute('x', (x + partC2Xoffset).toString());
        part4.setAttribute('y', (y + 48).toString());
        part4.textContent = prizeData.tickets.partList[6];
        minus6.setAttribute('cx', (x + minusC2Xoffset).toString());
        minus6.setAttribute('cy', (y + 45).toString());

        if (prizeData.tickets.partList[8]) {
          add8.setAttribute('cx', (x + addC1Xoffset).toString());
          add8.setAttribute('cy', (y + 58).toString());
          addTxt8.setAttribute('x', (x + addC1Xoffset).toString());
          addTxt8.setAttribute('y', (y + 60).toString());
          addTxt8.textContent = prizeData.tickets.partList[9];
          part5.setAttribute('x', (x + partC1Xoffset).toString());
          part5.setAttribute('y', (y + 61).toString());
          part5.textContent = prizeData.tickets.partList[8];
          minus8.setAttribute('cx', (x + minusC1Xoffset).toString());
          minus8.setAttribute('cy', (y + 58).toString());
          if(prizeData.tickets.partList[10]){
            add10.setAttribute('cx', (x + addC2Xoffset).toString());
            add10.setAttribute('cy', (y + 58).toString());
            addTxt10.setAttribute('x', (x + addC2Xoffset).toString());
            addTxt10.setAttribute('y', (y + 60).toString());
            addTxt10.textContent = prizeData.tickets.partList[11];
            part6.setAttribute('x', (x + partC2Xoffset).toString());
            part6.setAttribute('y', (y + 61).toString());
            part6.textContent = prizeData.tickets.partList[10];
            minus10.setAttribute('cx', (x + minusC2Xoffset).toString());
            minus10.setAttribute('cy', (y + 58).toString());
            if(prizeData.tickets.partList[12]){
              add12.setAttribute('cx', (x + addC1Xoffset).toString());
              add12.setAttribute('cy', (y + 71).toString());
              addTxt12.setAttribute('x', (x + addC1Xoffset).toString());
              addTxt12.setAttribute('y', (y + 73).toString());
              addTxt12.textContent = prizeData.tickets.partList[13];
              part7.setAttribute('x', (x + partC1Xoffset).toString());
              part7.setAttribute('y', (y + 74).toString());
              part7.textContent = prizeData.tickets.partList[12];
              minus12.setAttribute('cx', (x + minusC1Xoffset).toString());
              minus12.setAttribute('cy', (y + 71).toString());
              if(prizeData.tickets.partList[14]){
                add14.setAttribute('cx', (x + addC2Xoffset).toString());
                add14.setAttribute('cy', (y + 71).toString());
                addTxt14.setAttribute('x', (x + addC2Xoffset).toString());
                addTxt14.setAttribute('y', (y + 73).toString());
                addTxt14.textContent = prizeData.tickets.partList[15];
                part8.setAttribute('x', (x + partC2Xoffset).toString());
                part8.setAttribute('y', (y + 74).toString());
                part8.textContent = prizeData.tickets.partList[14];
                minus14.setAttribute('cx', (x + minusC2Xoffset).toString());
                minus14.setAttribute('cy', (y + 71).toString());
              }
            }
          }
        }
        break;
    }
  }
  catch (e){
    console.log(e);
  }


});

function reset(){
console.log('reset');
  winnerTxt.setAttribute('x', '500');
  goBack.setAttribute('x', '500');
  add0.setAttribute('x', '500');
  add2.setAttribute('x', '500');
  add4.setAttribute('x', '500');
  add6.setAttribute('x', '500');
  add8.setAttribute('x', '500');
  add10.setAttribute('x', '500');
  add12.setAttribute('x', '500');
  add14.setAttribute('x', '500');
  prizes.setAttribute('viewBox', '-400 -300 800 600');
}

function adjustTicketQuantity(addBtn, qidx, q){
  prizeData.tickets.partList[qidx] = prizeData.tickets.partList[qidx] + q;
  if (prizeData.tickets.partList[qidx] < 0) prizeData.tickets.partList[qidx] = 0;
  addBtn.textContent = prizeData.tickets.partList[qidx];
}