'use strict';

var kittenTable = document.getElementById('kitten-table');
console.log(kittenTable);
var myForm = document.getElementById('container-two');

// Kitten Constructor
function Kitten(name, interests, age) {
  this.name = name;
  this.age = age;
  this.interests = interests;
}

// Kitten.prototype.getAge = function () {
//   this.age = `${randomAge(3, 12)} months old!`;
//   console.log(`${this.name} is ${this.age}`);
// };

Kitten.prototype.render = function () {
  //create row
  var tr = document.createElement('tr');
  //give row content
  //create td FOR NAME
  var td = document.createElement('td');
  // give td content
  td.textContent = this.name;
  //append to row
  tr.appendChild(td);
  //create tds for interests ARRAY
  for (var i = 0; i < this.interests.length; i++) {
    td = document.createElement('td');
    //give tds content
    td.textContent = this.interests[i];
    //append row the DOM
    tr.appendChild(td);
  }
  //create td element for AGE
  td = document.createElement('td');
  //give td content
  td.textContent = this.age;
  //append td to the row
  tr.appendChild(td);

  //append row the DOM
  kittenTable.appendChild(tr);
};

var frankie = new Kitten('Frankie', ['cuddling', 'chasing string', 'catnip'], 3);
var jumper = new Kitten('Jumper', ['playing', 'jumping', 'racing around'], 5);
var serena = new Kitten('Serena', ['napping near her human', 'eating', 'catnip'], 6);


function renderHeader(){
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = 'Name';
  tr.appendChild(th);

  th = document.createElement('th');
  th.textContent = 'Interest One';
  tr.appendChild(th);

  th = document.createElement('th');
  th.textContent = 'Interest Two';
  tr.appendChild(th);

  th = document.createElement('th');
  th.textContent = 'Interest Three';
  tr.appendChild(th);

  th = document.createElement('th');
  th.textContent = 'Age';
  tr.appendChild(th);

  kittenTable.appendChild(tr);
}








//helper function to get random number, code used from MDN docs:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// if age is unknown I want to get a random age between 3 and 12 months
// function randomAge(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

//executable code
renderHeader();
frankie.render();
jumper.render();
serena.render();



// event Handler
// 1. takes ONE parameter - the EVENT

function handleSubmit(event){
  event.preventDefault();

  var kittenName = event.target.kittenname.value;
  // console.log('kittenName: ', kittenName);

  var interestOne = event.target.interestone.value;
  // console.log('pets: ', interestOne );

  var interestTwo = event.target.interesttwo.value;
  // console.log('pets: ', interestTwo );

  var interestThree = event.target.interestthree.value;
  // console.log('pets: ', interestThree );

  var interests = [interestOne, interestTwo, interestThree];

  var age = event.target.age.value;
  // console.log('age: ', age);
  event.target.kittenname.value = '';

  var newKitten = new Kitten(kittenName, interests, age);

  //totals row?

  newKitten.render();

  // INSIDE EVENT HANDLER!!!!   WHY?!  Ansychronous!
  // rerender totals row?
  //  - need to renrender
  //  - maybe clear the old one first? possibly clear INNERHTML?
  // how many footer rows will you have?
  // will the totals reflect the new store added?
  //  - how is total generated
  //  - if seperate function. maybe run that function again?
  //  - will totals be correct?  or do they need to be reset to ZERO - BEFORE calculating totals again???


}

// second step - ADD the event listener
// two params required
// 1. event - entered as a string
// 2. callback function - EVENT HANDLER
// myContainer.addEventListener('click', handleClick);

myForm.addEventListener('submit', handleSubmit);





