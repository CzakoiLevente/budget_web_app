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
let tableBody;

window.onload = () => {

  entries = document.getElementById('entries')
  body = document.getElementById('body');
  buttonInsert = document.getElementById('insert');
  buttonList = document.getElementById('list');
  formItem = document.getElementById('formItem');
  formPrice = document.getElementById('formPrice');
  formQuantity = document.getElementById('formQuantity');
  tableBody = document.getElementById('table_body');

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
  http.open('GET', '/get');
  http.onload = () => {
    let response = JSON.parse(http.responseText);
    addToTable(response);
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

function modifyRow() {
    window.alert("Jó játék, hogy nyomkodod??");
};

function submit_purchase() {
  http.open('POST', '/insert');
  //http.setRequestHeader("Content-type", "text/plain");
  http.setRequestHeader("Content-type", "application/json");
  //setting request header will tell server how to interpret (in this case: text or json)
  http.onload = () => {
    //let response = http.responseText;
    console.log('response');
  };
  http.send(JSON.stringify(getFormData()));
  getList();
};

function getFormData() {
  let formData = {
    item: formItem.value,
    quantity: formQuantity.value,
    price: formPrice.value
  };
  formItem.value = null;
  formQuantity.value = null;
  formPrice.value = null;  
  return formData;
};

function addToTable(arr) {
  tableBody.innerText = '';
  for (let i = 0; i < arr.length; i++) {
    let tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);
    let tableItem = document.createElement("td");
    let tableQuantity = document.createElement("td");
    let tablePrice = document.createElement("td");
    let tableTimeStamp = document.createElement("td");        
    
    tableRow.appendChild(tableItem);
    tableRow.appendChild(tableQuantity);
    tableRow.appendChild(tablePrice);
    tableRow.appendChild(tableTimeStamp);

    tableItem.innerText = arr[i].item;
    tableQuantity.innerText = arr[i].quantity;
    tablePrice.innerText = arr[i].price;
    tableTimeStamp.innerText = arr[i].price;
  };
};