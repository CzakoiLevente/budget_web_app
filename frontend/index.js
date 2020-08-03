'use strict';

const http = new XMLHttpRequest;

let body;
let tableBody;
let buttonInsert;
let buttonList;
let formItem;
let formQuantity;
let formPrice;
let formCurrency;
let formPayment;
let formShop;

window.onload = () => {

  body = document.getElementById('body');
  tableBody = document.getElementById('table_body');
  buttonInsert = document.getElementById('insert');
  buttonList = document.getElementById('list');
  formItem = document.getElementById('formItem');
  formPrice = document.getElementById('formPrice');
  formQuantity = document.getElementById('formQuantity');
  formCurrency = document.getElementById('formCurrency');
  formPayment = document.getElementById('formPayment');
  formShop = document.getElementById('formShop');

  getList();
};

function insertRow() {
  //console.log('button working');
  http.open('POST', '/insert');
  http.setRequestHeader("Content-type", "application/json");
  http.onload = () => {
  };
  http.send(JSON.stringify(randomPurchase()));
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
    price: formPrice.value,
    currency: formCurrency.value,
    payment: formPayment.value,
    shop: formShop.value
  };
  //formCurrency.value = null;
  //formPayment.value = null;
  //formShop.value = null;
  //formItem.value = null;
  //formQuantity.value = null;
  //formPrice.value = null;  
  return formData;
};

function addToTable(arr) {
  tableBody.innerText = '';
  for (let i = 0; i < arr.length; i++) {
    let checkBox = document.createElement("input");
    let tableData = document.createElement("td")
    let tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);
    let tableItem = document.createElement("td");
    let tableQuantity = document.createElement("td");
    let tablePrice = document.createElement("td");
    let tableTimeStamp = document.createElement("td");
    let tableShop = document.createElement("td");
    let tablePayment = document.createElement("td");
    let tableCurrency = document.createElement("td");
    
    tableRow.appendChild(tableData);
    tableData.appendChild(checkBox);
    tableRow.appendChild(tableItem);
    tableRow.appendChild(tableQuantity);
    tableRow.appendChild(tablePrice);
    tableRow.appendChild(tableCurrency);
    tableRow.appendChild(tablePayment);
    tableRow.appendChild(tableShop);
    tableRow.appendChild(tableTimeStamp);

    checkBox.setAttribute("id", `${i}`);
    checkBox.setAttribute("type", `checkbox`);
    tableRow.setAttribute("id", `${i}`);
    tableItem.innerText = arr[i].item;
    tableQuantity.innerText = arr[i].quantity;
    tablePrice.innerText = arr[i].price;
    tableTimeStamp.innerText = arr[i].timestamp.replace('T', ' ').slice(0, 19);
    tableCurrency.innerHTML = arr[i].currency;
    tablePayment.innerHTML = arr[i].payment_method;
    tableShop.innerHTML = arr[i].shop;
  };
};

function randomPurchase() {
  console.log('random purchase');
  return {
    item: rnStr(4).toLocaleLowerCase(),
    quantity: rnNumber(2),
    price: rnNumber(3),
    currency: rnStr(3).toLocaleUpperCase(),
    payment: rnPayment(),
    shop: rnStr(4).toLocaleUpperCase()
  };
};

function rnStr(num) {
  let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let charactersLength = characters.length;
   for ( let i = 0; i < num; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
};

function rnNumber(num) {
  let result = '';
  for (let i = 1; i < num + 1; i++) {
    result += Math.floor(Math.random() * num);
  };
  return parseInt(result + 1);
};

function rnPayment() {
  let payment = ['cash', 'card', 'tansfer', 'crypto', 'payment in sex'];
  return payment[Math.floor(Math.random() * 5)];
};