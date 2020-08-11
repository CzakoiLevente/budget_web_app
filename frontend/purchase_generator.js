function randomPurchase() {
  return {
    item: randomString(4).toLocaleLowerCase(),
    quantity: randomNumber(2),
    price: randomNumber(3),
    currency: randomString(3).toLocaleUpperCase(),
    payment: randomPayment(),
    shop: randomString(4).toLocaleUpperCase(),
    date: randomDate(100,2,20)
  };
};

function randomString(num) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzéáíóúöőüű0123456789';
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

function randomDate(rangeOfDays, startHour, hourRange) {
  let today = new Date(Date.now());
  let resultDate = new Date(today.getYear() + 1900, today.getMonth(), today.getDate() + Math.random() * rangeOfDays, Math.random() * hourRange + startHour, Math.random() * 60);
  console.log(JSON.stringify(resultDate).replace('T', ' ').slice(1, 20));
  return JSON.stringify(resultDate).replace('T', ' ').slice(1, 20);
};

randomDate(200,2,12);