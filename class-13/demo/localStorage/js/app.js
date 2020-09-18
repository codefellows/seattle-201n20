'use strict';

// target our order form from the html
var orderForm = document.getElementById('orderForm');
var orders = document.getElementById('orders');
Coffee.drinks = [];


// constructor function to create a basic drink
function Coffee(name, size, milk, dt){
  this.name = name;
  this.size = size;
  this.drinkType = dt;
  this.milk = milk;

  console.log(this);
  // add every drink that gets created into an array
  Coffee.drinks.push(this);

  updateStorage();
}


function updateStorage(){
  var arrayString = JSON.stringify(Coffee.drinks);
  console.log(arrayString);
  localStorage.setItem('coffee', arrayString);

}


// alternative:

// function getCoffeeOrders(){
//   // retrieve data from local storage
//   var data = localStorage.getItem('coffee');
//   // convert the data (array) from a string to something that we can use in JavaScript.
//   var coffeeData =  JSON.parse(data);
//     for(var i = 0; i < coffeeData.length; i++){
//       new Coffee(coffeeData[i].name, coffeeData[i].size, coffeeData[i].drinkType, coffeeData[i].milk);
//     }
//     console.log("drinks", Coffee.drinks);

//   renderOrders();

//   }


function getCoffeeOrders(){
  // retrieve data from local storage
  var data = localStorage.getItem('coffee');
  // convert the data (array) from a string to something that we can use in JavaScript.
  var coffeeData =  JSON.parse(data);

  // If this is the first time we visit the page, there will not be an array for us to use in localStorage
  // if(coffeeData !== null){
  Coffee.drinks = coffeeData;
  // }
  renderOrders();
}



// event handler function to run everytime the form is submitted
function handleSubmit(event){
  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  var drink = event.target;
  var name = drink.name.value;
  var size = drink.size.value;
  var dType  = drink.drinkType.value;
  var milk = drink.milk.value;

  var item = new Coffee(name, size, milk, dType);


  // update the previous orders with the new order
  renderOrders();

}


function renderOrders(){
  // clear all my current uls to prevent duplicate information
  orders.textContent = '';
  // go through the array and output the details of each drink in the array
  for(var i=0; i < Coffee.drinks.length; i++){
    var drinkLI = document.createElement('li');
    var infoP = document.createElement('p');
    var temp;
    infoP.textContent = `${Coffee.drinks[i].name} orderd a ${Coffee.drinks[i].size}oz ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk} milk`;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }
}

// Add an event listener to the submit button
orderForm.addEventListener('submit', handleSubmit);

getCoffeeOrders();
