'use strict';

// get element from DOM - step one for adding an event listener
// var myContainer = document.getElementById('container');
var parentEl = document.getElementById('results');

//step one to add listerner - GET ELEMENT
var myForm = document.getElementById('container-two');

// event Handler
// 1. takes ONE parameter - the EVENT
function handleClick(event){
  // console.log('the event', event);
  // console.log('the event.target is ', event.target);
  // console.log('the event.target.textContent ', event.target.textContent);
  // console.log('the event.target.id is ', event.target.id)

  if (event.target.id === 'box-one'){
    var pEl = document.createElement('p');
    pEl.textContent = 'Box 1 was clicked!';
    parentEl.append(pEl);
  }

  if (event.target.id === 'box-two'){
    var pEl = document.createElement('p');
    pEl.textContent = 'clicked:  Box 2!';
    parentEl.append(pEl);
  }

  if (event.target.id === 'box-three'){
    var pEl = document.createElement('p');
    pEl.textContent = 'Box 3 done got clicked!';
    parentEl.appendChild(pEl);
  }

  if (event.target.id === 'container'){
    var pEl = document.createElement('p');
    pEl.textContent = 'FOLLOW INSTRUCTIONS!!!';
    parentEl.appendChild(pEl);
  }
}

function handleSubmit(event){
  event.preventDefault();

  var username = event.target.username.value;
  console.log('username: ', username);

  var pets = event.target.pets.value;
  console.log('pets: ', pets );

  var word = event.target.word.value;
  console.log('word: ', word);
}

// second step - ADD the event listener
// two params required
// 1. event - entered as a string
// 2. callback function - EVENT HANDLER
// myContainer.addEventListener('click', handleClick);

myForm.addEventListener('submit', handleSubmit);


