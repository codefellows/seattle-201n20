'use strict';

//we had a code pen for css box model:  https://codepen.io/rkgallaway/pen/QWNegZG
// this file is based on our repl.it:  https://repl.it/@rkgallaway/201n20-arrays-controlFlow#index.js
// our known datatypes:  stings, numbers, booleans
// new data type:  array
// an array is a collection (in javascript)
// collection of what?  other datatypes!  strings, numnbers, booleans, even other arrays - can be mixed

var students = ['Terrence', 'Thomas', 'Travis', 'Anthony O.', 'Anthony T.', 'Nassir'];
//                 0           1         2          3             4            5

console.log(students[0]);
students[7] = 'Ceylin';

console.log(students.length);
console.log(students);

// while loops:  
// while(true){
//   console.log('do the thing');
// }

var i = 0;   //instantiation
while (i < students.length){ //condtion
  console.log(students[i]);  //
  // i = i + 1;  //equivalent code below - 
  i++;  // incrementation
}

console.log('--------------')
// for loops

// 3 counter parts:  
  // 1. instantiation
  // 2. condition
  // 3. incrementation
 // for (instantiation; condition; incrementation){
  //  do the thing
//  }
//stops becuase '8 < 8' FALSE!!!!       
for (var i = 0; i < students.length; i++){
  console.log(students[i]);
}

var colors = ['blue', 'red', 'yellow'];

console.log(colors);

//truthy and falsy --play around this
var compareValue = false;
var otherValue;

if(!compareValue){
  console.log(true);
} else {
  console.log(false);
}


