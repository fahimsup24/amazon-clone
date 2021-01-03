
basketF = [
  {
    id: 875874438,
    image: "https://images-na.ssl-images-amazon.com/images/I/810wUXbwzdL._AC_UX679_.jpg",
    price: 63.75,
    rating: 5,
    title: "adidas Originals Men's Superstar Track Jacket"
  },

  {
    id: 875874438,
    image: "https://images-na.ssl-images-amazon.com/images/I/810wUXbwzdL._AC_UX679_.jpg",
    price: 100.00,
    rating: 5,
    title: "adidas Originals Men's Superstar Track Jacket"
  },

]



const getBasketTotal = (basket) => {
  basket.reduce((basket, item) => item.price + basket, 0);
}

console.log(getBasketTotal(basketF))