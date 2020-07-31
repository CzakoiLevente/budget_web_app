'use strict';

//console.log('asda');
const http = new XMLHttpRequest;

let body;
let buttonInsert;
let buttonList;
let entries;
let formItem;
let formQuantity;
let formPrice;

window.onload = () => {

  entries = document.getElementById('entries')
  body = document.getElementById('body');
  buttonInsert = document.getElementById('insert');
  buttonList = document.getElementById('list');
  formItem = document.getElementById('formItem');
  formPrice = document.getElementById('formPrice');
  formQuantity = document.getElementById('formQuantity');

  //let response = http.responseText;
  //console.log('data = ' + data);
  //console.log('http onload log');

  getList();
};

function insertRow() {
  //console.log('button working');
  http.open('POST', '/insert');
  http.onload = () => {
    let response = http.responseText;
    console.log(response);
  };
  http.send();
  getList();
};

function getList() {
  //console.log('list button working');
  http.open('GET', '/get');
  http.onload = () => {
    let response = http.responseText;
    const obj = JSON.parse(response);    //expressnek kéne csinálni, megnézni hogy kell beállítani!
    let str = JSON.stringify(obj, null, 2);
    //console.log('response = ' + data);
    //let row = document.createElement('pre');
    //console.log('body -> ' + body);
    //body.appendChild(row);
    entries.innerHTML = str;
  };
  http.send();
};

function deleteRow() {
  http.open('DELETE', '/delete');
  http.onload = () => {
    let response = http.responseText;
    console.log(response);
  };
  http.send();
  getList();
};

let counter = 0;
function modifyRow() {
  counter += 1;
  if(counter === 10) {
    window.alert("Jó játék, hogy nyomkodod??");
    counter = 0;
  }
};

function submit_purchase() {
  console.log("Purchase submitted!");
  let formData = {
    item : formItem.value,
    quantity : formQuantity.value,
    price : formPrice.value 
  };
  console.log(formData.item + ' ' + formData.quantity + ' ' + formData.price);
};