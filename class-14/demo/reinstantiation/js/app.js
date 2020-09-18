'use strict';

var allCats = [];
var catform = document.getElementById('catform');
var catlist = document.getElementById('catlist');

function Cat(name){
  this.name = name;
  this.render = function(){
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    catlist.appendChild(listItem);
  },
  allCats.push(this);
}

function handleCatSubmit(e){
  e.preventDefault();
  var newCat = new Cat(e.target.kitteh.value);
  catform.reset();
  newCat.render();
  localStorage.cats = JSON.stringify(allCats);
  console.log('this is what is in local storage', localStorage.cats);
}
