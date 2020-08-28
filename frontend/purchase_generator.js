function randomPurchase() {
  return {
    item: randomItem(),
    quantity: randomNumber(2),
    price: randomNumber(3),
    currency: randomCurrency(),
    payment: randomPayment(),
    shop: randomShop(4),
    date: randomDate(100, 2, 20)
  };
};

function randomNumber(num) {
  let result = '';
  for (let i = 1; i < num + 1; i++) {
    result += Math.floor(Math.random() * num);
  };
  return parseInt(result + 1);
};

function randomPayment() {
  let payment = ['cash', 'card', 'tansfer', 'crypto', 'payment in nature'];
  return payment[Math.floor(Math.random() * 5)];
};

function randomDate(rangeOfDays, startHour, hourRange) {
  let today = new Date(Date.now());
  let resultDate = new Date(today.getYear() + 1900, today.getMonth(), today.getDate() + Math.random() * rangeOfDays, Math.random() * hourRange + startHour, Math.random() * 60);
  return JSON.stringify(resultDate).replace('T', ' ').slice(1, 20);
};

function randomIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length) + 0];
}

function randomCurrency() {
  listCurrency = ['£', '€', '$', '¥', 'Kč', '₪', 'د.ج', 'дин', 'ج.س.', 'ر.ي', 'HUF', '₭'];
  return randomIndex(listCurrency);
};

function randomShop() {
  listOfShops = ['Walmart', 'McDonald’s ', 'Subway', 'Burder King', 'Starbucks', 'Walgreens', 'Target', 'CVS', 'Taco Bell', 'Pizza Hut', 'DM', 'Praktiker', 'OBI', 'Metro', 'Lidl', 'BILLA', 'Coop', 'Aldi', 'Auchan', 'Deichman', 'Libri']
  return randomIndex(listOfShops);
};


function randomItem() {
  let listOfGoods = ["asparagus", "apples", "avacado", "alfalfa", "acorn", "squash", "almond", "arugala", "artichoke", "applesauce", "asian noodles", "antelope", "ahi tuna", "albacore tuna", "Apple juice", "Avocado roll", "Bruscetta", "bacon", "black beans", "bagels", "baked beans", "BBQ", "bison", "barley", "beer", "bisque", "bluefish", "bread", "broccoli", "buritto", "babaganoosh",
    "Cabbage", "cake", "carrots", "carne asada", "celery", "cheese", "chicken", "catfish", "chips", "chocolate",
    "chowder", "clams", "coffee", "cookies", "corn", "cupcakes", "crab", "curry", "cereal", "chimichanga,dates",
    "dips", "duck", "dumplings", "donuts", "eggs", "enchilada", "eggrolls", "English muffins", "edimame",
    "eel sushi", "fajita", "falafel", "fish", "franks", "fondu", "French toast", "French dip", "Garlic", "ginger", "gnocchi", "goose", "granola", "grapes", "green beans", "Guancamole", "gumbo",
    "grits", "Graham crackers", "ham", "halibut", "hamburger", "bacon", "cheeseburger", "honey", "huenos rancheros", "hash browns", "hot dog", "haiku roll", "hummus", "ice cream", "Irish stew", "Indian food", "Italian bread", "jambalaya", "jelly", "jam", "jerky", "jalapeño", "kale", "kabobs", "ketchup", "kiwi", "kidney beans", "kingfish", "lobster", "Lamb", "Linguine", "Lasagna", "Meatballs", "Moose", "Milk", "Milkshake",
    "Noodles", "Ostrich", "Pizza", "Pepperoni", "Porter", "Pancakes", "Quesadilla", "Quiche", "Reuben", "Spinach",
    "Spaghetti", "Tater tots", "Toast", "Venison", "Waffles", "Wine", "Walnuts", "Yogurt", "Ziti", "Zucchini"
  ];
  return randomIndex(listOfGoods);
} 