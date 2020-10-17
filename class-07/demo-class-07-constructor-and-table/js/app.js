'use strict';

var kittenTable = document.getElementById('kitten-table');
console.log(kittenTable);


// Kitten Constructor
function Kitten(name, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats) {
  this.name = name;
  this.age = 0;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
}

Kitten.prototype.getAge = function () {
  this.age = `${randomAge(3, 12)} months old!`;
  console.log(`${this.name} is ${this.age}`);
};

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

var frankie = new Kitten('Frankie', ['cuddling', 'chasing string', 'catnip'], true, false, true);
var jumper = new Kitten('Jumper', ['playing', 'jumping', 'racing around'], true, true, true);
var serena = new Kitten('Serena', ['napping near her human', 'eating', 'catnip'], false, false, true);


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
function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//executable code
renderHeader();
frankie.getAge();
frankie.render();
jumper.getAge();
jumper.render();
serena.getAge();
serena.render();







// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }



// 1.  render to the dom.
// console.log(parentElement);

// when creating elements - there is a pattern:
//create element
//give it content
//append to the DOM
// var article = document.createElement('article');
// parentElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = frankie.name;
// article.appendChild(h2);

// var p = document.createElement('p');
// p.textContent = `${frankie.name} is adorable and is ${frankie.age}`;
// article.appendChild(p);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// // most relevant part for lab-06
// for (var i = 0; i < frankie.interests.length; i++){
//   var li = document.createElement('li');
//   li.textContent = frankie.interests[i];
//   ul.appendChild(li);
// }

// var img = document.createElement('img');
// img.setAttribute('src', 'images/frankie.jpeg');
// img.setAttribute('alt', `cute picture of ${frankie.name}: orange and white kitten looking for adoption`);
// article.appendChild(img);

// 2. I want my render to be a METHOD of my object
//see render method inside of objects.  same as ab ove, just uses contextual this now instead of object name!

// need to render:  article with h2, p, ul with lis, img - DONE

