'use strict';

//const { raw } = require("body-parser");

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
let mainCheck;
let databaseRecords;
let checks;

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
  mainCheck = document.getElementById('main-check');
  
  mainCheck.addEventListener('change', function () {
    if (this.checked) {
      for (let i = 0; i < checks.length; i++) {
        checks[i].checked = true;
      };
      mainCheck.checked = true;   
    } else {
          for (let i = 0; i < checks.length; i++) {
            checks[i].checked = false;
          };
          mainCheck.checked = false;        
    }
  });
  getList();
};


function insertRow() {
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
    databaseRecords = response;
    //console.log(databaseRecords);
    addToTable(response);
  };
  http.send();
};

function deleteRow() {
  http.open('DELETE', '/delete');
  http.setRequestHeader('Content-type', 'text/plain')
  http.onload = () => {
  };

  /*
  if (window.confirm("Do you really want to leave?")) { 
    //window.open( "exit.html", "Thanks for Visiting!");
  }
  */

 let items = getPurchaseData(getCheckes(checks));
 console.log(items);

  http.send(JSON.stringify(items));
  getList();
};

function modifyRow() {
  //window.alert("Jó játék, hogy nyomkodod??");
  console.log('modify button clicked');
  
  //return ;
};

function submit_purchase() {
  http.open('POST', '/insert');
  //http.setRequestHeader("Content-type", "text/plain");
  http.setRequestHeader('Content-type', 'application/json;charset=utf-8');
  //setting request header will tell server how to interpret (in this case: text or json)
  http.onload = () => {
    //let response = http.responseText;
    //console.log('response');
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
    let tableData = document.createElement("td");
    let tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);
    let tableItem = document.createElement("td");
    let tableQuantity = document.createElement("td");
    let tablePrice = document.createElement("td");
    let tableTimeStamp = document.createElement("td");
    let tableShop = document.createElement("td");
    let tablePayment = document.createElement("td");
    let tableCurrency = document.createElement("td");
    let itemId = document.createElement("td");
    
    tableRow.appendChild(itemId);
    tableData.appendChild(checkBox);
    tableRow.appendChild(tableItem);
    tableRow.appendChild(tableQuantity);
    tableRow.appendChild(tablePrice);
    tableRow.appendChild(tableCurrency);
    tableRow.appendChild(tablePayment);
    tableRow.appendChild(tableShop);
    tableRow.appendChild(tableTimeStamp);
    tableRow.appendChild(tableData);
    
    checkBox.setAttribute("class", "check");
    checkBox.setAttribute("type", `checkbox`);
    checkBox.setAttribute("id", `${arr[i]['item-id']}`);
    //tableRow.setAttribute("id", `${i + 1}`);
    tableRow.setAttribute("class", "table_row");
    itemId.innerText = `${arr[i]['item-id']}`;
    tableItem.innerText = arr[i].item;
    tableQuantity.innerText = arr[i].quantity;
    tablePrice.innerText = arr[i].price;
    tableTimeStamp.innerText = arr[i].timestamp.replace('T', ' ').slice(0, 19);
    tableCurrency.innerHTML = arr[i].currency;
    tablePayment.innerHTML = arr[i].payment_method;
    tableShop.innerHTML = arr[i].shop;
  };
  checks = document.getElementsByClassName("check");
};

function randomPurchase() {
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
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  };
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

function getCheckes(checks) {  
  let checkedItems = [];
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked === true) {
      checkedItems.push(checks[i]);
    }
  };
  return checkedItems;
};

function getPurchaseData(arr) {
  let purchasesId = [];
  for (let i = 0; i < arr.length; i++) {
    for (let elem of databaseRecords) {
      if (+arr[i].id === +elem['item-id']) {
        /*
        let x = {
          item: `${elem.item}`,
          quantity: `${elem.quantity}`,
          price: `${elem.price}`,
          currency: `${elem.currency}`,
          payment: `${elem.payment}`,
          shop: `${elem.shop}`
        };
        */
        purchasesId.push(elem['item-id']);
      }
    };
  };
  return purchasesId;
};