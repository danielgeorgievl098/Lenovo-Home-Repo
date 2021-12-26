//Reduce - Objects

//cart example
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "Iphone 12",
    price: 1599.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi",
    price: 399.99,
    amount: 3,
  },
  {
    title: "Google Pixel",
    price: 299.99,
    amount: 4,
  },
  {
    title: "Nokia Lumia",
    price: 99.99,
    amount: 3,
  },
];

let { totalItems, cartTotal } = cart.reduce(
  (acc, curr) => {
    const { amount, price } = curr;

    //count items
    acc.totalItems += amount;

    //total price
    acc.cartTotal += amount * price;
    return acc;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(totalItems, cartTotal);

//git hub repos example
const url = `https://api.github.com/users/john-smilga/repos?per_page=100`;
const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const { language } = repo;

    if (total[language]) {
      total[language] = total[language] + 1;
    } else {
      total[language] = 1;
    }
    return total;
  }, {});
  console.log(newData);
};

fetchRepos();
