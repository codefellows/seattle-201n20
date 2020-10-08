'use strict';

// repl from class:   https://repl.it/@rkgallaway/c201n20-class-04-demo

var people = ['John', 'Nassir', 'Rashad', 'Ryan', 'Cordell', 'Thomas', 'Adrienne', 'Alistair', 'Dawit', 'Aliya'];
var students = ['Nassir', 'Rashad', 'Cordell', 'Thomas', 'Dawit'];
//                 0        1          2          3        4
// console.log(people.length);
var doorsClosed = false;
var someGlobalVariable;

function greeter (){
  while (!doorsClosed) {
    var message;
    for (var i = 0; i < people.length; i++) {
      message = `Hello ${people[i]}!`;
      for (var j = 0; j < students.length; j++){
        if(people[i] === students[j]){
          // message = `${message} Enjoy 201n20`;
          message += 'Enjoy 201n20';
        } 
      }
      console.log(message);
    }
    doorsClosed = true;
  }
}

greeter();

var firstName = 'Ryan';
var lastName = 'Gallaway';
console.log(`hello ${firstName} ${lastName}`);
console.log('I am here ------------------')

function originalLogger(){
  var myMessage = `HELLO ${firstName} ${lastName}`
  console.log(myMessage);
  // return myMessage;
  someGlobalVariable = myMessage;
}

// var savedMessage = originalLogger();
// console.log('savedMessage is: ', savedMessage)

originalLogger();
console.log('someGlobalVariable', someGlobalVariable);

function logger(first, last){
  console.log(`hello ${first} ${last}`);
}

logger('Ceylin', 'Brooks');

function arrayLogger(this_could_be_anything){
  for (var i = 0; i < this_could_be_anything.length; i++){
    console.log(this_could_be_anything[i]);
  }
}

arrayLogger(people);
console.log('------------------')
arrayLogger(students);