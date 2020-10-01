'use strict';

var username = prompt('What is your name?');
console.log('Hi ' + username);

// Ryan - Question 1:
var homeLocation = prompt('Am I from Seattle?').toLowerCase();

if(homeLocation === 'yes' || homeLocation === 'y' ){
  // console.log('Yes!  I live in Seattle');
  alert('Yes!  I live in Seattle');
}
