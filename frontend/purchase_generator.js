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
