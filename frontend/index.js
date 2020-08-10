'use strict';

const http = new XMLHttpRequest;

let tableBody;
let butttonDelete;
let formItem;
let formQuantity;
let formPrice;
let formCurrency;
let formPayment;
let formShop;
let mainCheck;
let databaseRecords;
let checks;
let clickId;

window.onload = () => {

  tableBody = document.getElementById('table_body');
  butttonDelete = document.getElementById('delete');
  formItem = document.getElementById('formItem');
  formPrice = document.getElementById('formPrice');
  formQuantity = document.getElementById('formQuantity');
  formCurrency = document.getElementById('formCurrency');
  formPayment = document.getElementById('formPayment');
  formShop = document.getElementById('formShop');
  mainCheck = document.getElementById('main-check');

  getList();
};

function mainCheckChange() {
  if (mainCheck.checked) {
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
    console.log(databaseRecords);
    addToTable(response);
  };
  http.send();
};

function deleteRow() {
  let ids = getSelectedItemIds(checks);
  console.log(ids);
  if (window.confirm("Do you really want to delete selected entries?")) {
    http.open('DELETE', '/delete');
    http.setRequestHeader('Content-type', 'text/plain');
    http.onload = () => {
    };
    http.send(JSON.stringify(ids));
    getList();
  };
};

function modifyRow() {
  http.open('POST', '/update');
  http.setRequestHeader('Content-type', 'application/json;charset=utf-8');
  http.onload = () => {
  };
  let formData = getFormData();
  formData.id = clickId;
  http.send(JSON.stringify(formData));
  getList();
};

function submit_purchase() {
  http.open('POST', '/insert');
  //http.setRequestHeader("Content-type", "text/plain");
  http.setRequestHeader('Content-type', 'application/json;charset=utf-8');
  //setting request header will tell server how to interpret (in this case: text or json)
  http.onload = () => {
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
  clearForm();
  return formData;
};

function addToTable(arr) {
  tableBody.innerText = '';
  checks = [];
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

    checkBox.setAttribute("type", `checkbox`);
    checkBox.dataset['itemId'] = arr[i]['item-id'];
    // dataset -> will convert to camelCase in JS -> check: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
    checkBox.addEventListener('click', function () {
      if (this.checked) {
        butttonDelete.disabled = false;
      } else {
        butttonDelete.disabled = true;
      }
    });
    checks.push(checkBox);
    itemId.innerText = `${arr[i]['item-id']}`;
    tableItem.innerText = arr[i].item;
    tableQuantity.innerText = arr[i].quantity;
    tablePrice.innerText = arr[i].price;
    tableTimeStamp.innerText = arr[i].timestamp.replace('T', ' ').slice(0, 19);
    tableCurrency.innerHTML = arr[i].currency;
    tablePayment.innerHTML = arr[i].payment_method;
    tableShop.innerHTML = arr[i].shop;

    tableRow.addEventListener('click', function () {
      fillForm(arr[i]);
      clickId = arr[i]['item-id'];
    });
  };
};

function randomPurchase() {
  return {
    item: randomString(4).toLocaleLowerCase(),
    quantity: randomNumber(2),
    price: randomNumber(3),
    currency: randomString(3).toLocaleUpperCase(),
    payment: randomPayment(),
    shop: randomString(4).toLocaleUpperCase()
  };
};

function randomString(num) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  };
  return result;
};

function randomNumber(num) {
  let result = '';
  for (let i = 1; i < num + 1; i++) {
    result += Math.floor(Math.random() * num);
  };
  return parseInt(result + 1);
};

function randomPayment() {
  let payment = ['cash', 'card', 'tansfer', 'crypto', 'payment in sex'];
  return payment[Math.floor(Math.random() * 5)];
};

function getSelectedItemIds(checks) {
  let ids = [];
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked === true) {
      ids.push(checks[i].dataset['itemId']);
    }
  };
  return ids;
};

function fillForm(obj) {
  formItem.value = obj.item;
  formQuantity.value = obj.quantity;
  formPrice.value = obj.price;
  formCurrency.value = obj.currency;
  formPayment.value = obj.payment_method;
  formShop.value = obj.shop;
};

function getRowData(num) {
  for (let record of databaseRecords) {
    if (num === record['item-id']) {
      return record;
    }
  };
};

function clearForm() {
  formCurrency.value = null;
  formPayment.value = null;
  formShop.value = null;
  formItem.value = null;
  formQuantity.value = null;
  formPrice.value = null;
};