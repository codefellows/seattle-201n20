'use strict';

var parentElement = document.getElementById('kitten-profiles');

// create object(s) -create ONE first! with the given data/properties
var frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['cuddling', 'chasing string', 'catnip'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  getAge: function () {
    this.age = `${randomAge(3, 12)} months old!`;
    console.log(`${this.name} is ${this.age}`);
  },
  render: function () {
    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);

    var p = document.createElement('p');
    p.textContent = `${this.name} is adorable and is ${this.age}`;
    article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    // most relevant part for lab-06
    for (var i = 0; i < this.interests.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.interests[i];
      ul.appendChild(li);
    }

    var img = document.createElement('img');
    img.setAttribute('src', 'images/frankie.jpeg');
    img.setAttribute('alt', `cute picture of ${this.name}: orange and white kitten looking for adoption`);
    article.appendChild(img);

  }
};

var jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['playing', 'jumping', 'racing around'],
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithCats: true,
  getAge: function () {
    this.age = `${randomAge(3, 12)} months old!`;
    console.log(`${this.name} is ${this.age}`);
  },
  render: function () {
    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);

    var p = document.createElement('p');
    p.textContent = `${this.name} is adorable and is ${this.age}`;
    article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    // most relevant part for lab-06
    for (var i = 0; i < this.interests.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.interests[i];
      ul.appendChild(li);
    }

    var img = document.createElement('img');
    img.setAttribute('src', 'images/jumper.jpeg');
    img.setAttribute('alt', `cute picture of ${this.name}: orange and white kitten looking for adoption`);
    article.appendChild(img);

  }
};

var serena = {
  name: 'Serena',
  age: 0,
  interests: ['napping near her human', 'eating', 'catnip'],
  isGoodWithKids: false,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  getAge: function () {
    this.age = `${randomAge(3, 12)} months old!`;
    console.log(`${this.name} is ${this.age}`);
  },
  render: function () {
    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);

    var p = document.createElement('p');
    p.textContent = `${this.name} is adorable and is ${this.age}`;
    article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    // most relevant part for lab-06
    for (var i = 0; i < this.interests.length; i++) {
      var li = document.createElement('li');
      li.textContent = this.interests[i];
      ul.appendChild(li);
    }

    var img = document.createElement('img');
    img.setAttribute('src', 'images/serena.jpeg');
    img.setAttribute('alt', `cute picture of ${this.name}: orange and white kitten looking for adoption`);
    article.appendChild(img);

  }
};





//helper function to get random number, code used from MDN docs:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// if age is unknown I want to get a random age between 3 and 12 months
function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

