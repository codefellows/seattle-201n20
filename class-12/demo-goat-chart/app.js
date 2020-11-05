'use strict';

// create some goat objects
// will have an array of goat objects, and randomly display 2 different goats on the page
// we will click on these goats to vote
// we will track our clicks
// when we hit 10 clicks, remove event listener - close polls
// when the polls have closed, we render the results
// results: the name of the goat, number of times it was viewed, and the number of votes received


// global variables
var goats = [];
var totalClicksAllowed = 10;
var clicks = 0;
var renderQueue = [];
var votesArray = [];
var viewsArray = [];
var namesArray = [];

var myContainer = document.getElementById('container');
var imgOneEl = document.getElementById('image-one');
var imgTwoEl = document.getElementById('image-two');
var myList = document.getElementById('list');
var ctx = document.getElementById('myChart').getContext('2d');
// constructor
function Goat(name) { //if not all jpg?
  this.name = name;
  this.src = `images/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  goats.push(this);
}

// functions
function getRandomGoatIndex() {
  return Math.floor(Math.random() * goats.length);
}

//executable code
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-away');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');


// console.log(getRandomGoatIndex());

//the goal:  to track FOUR unique images, only showing two, the two not shown will be the PRVIOUSLY SHOWN images
function populateRenderQueue() {
  while (renderQueue.length > 0) {
    renderQueue.pop(); //shift, unshift, pop, and push - what do those do?  STRONG RECOMMEND TO PLAY in repl
  }
  while (renderQueue.length < 2) {
    var uniqueGoat = getRandomGoatIndex();
    while (renderQueue.includes(uniqueGoat)) {
      uniqueGoat = getRandomGoatIndex();
    }
    //when here we KNOW we have a unique goat index
    renderQueue.push(uniqueGoat);
  }
  console.log('renderQue: ', renderQueue);
}

// [a, b, c, d]  1st time
//  [a, b, e, f]  or [e, f, a, b]  2nd time
// [e, f, g, c]  or [g, c, e, f] 3rd time


function renderGoats() {
  populateRenderQueue();
  var goatOne = renderQueue[0]; // this is an INDEX
  var goatTwo = renderQueue[1]; // this is an INDEX
  //with three indexes this gets more complex!!!  maybe use an array, maybe see if the index in question is included in that array, if it is, choose another index
  //NOTE:  we've myArray.push.  how do you remove something from an array?  how do we add something to the FRONT of an array?  remove from the FRONT, how remove from the BACK?

  imgOneEl.src = goats[goatOne].src;
  imgOneEl.alt = goats[goatOne].name;
  goats[goatOne].views++;

  imgTwoEl.src = goats[goatTwo].src;
  imgTwoEl.alt = goats[goatTwo].name;
  goats[goatTwo].views++;
}

function renderResults() {
  for (var i = 0; i < goats.length; i++) {
    // create element
    var li = document.createElement('li');
    // give it content
    li.textContent = `${goats[i].name} had ${goats[i].votes} votes, and was seen ${goats[i].views} times.`;
    // append it to the dom
    myList.appendChild(li);
  }
}

renderGoats();




// event handler takes 1 paramter:  event or often "e"
function handleClick(event) {
  // this grabs the image alt property - which is the same as the goat name property
  var clickedGoat = event.target.alt;
  clicks++;

  for (var i = 0; i < goats.length; i++) {
    // we are looking at ALL the name properties inside the goat array and comparing them to our image alt property
    if (clickedGoat === goats[i].name) {
      // if true, we KNOW we have the correct goat object and we can increment its votes!
      goats[i].votes++;
    }
  }

  renderGoats();
  if (clicks === totalClicksAllowed) {
    // remove event listener takes parameters:  event, and the callback function!
    myContainer.removeEventListener('click', handleClick);
    // renders our results in a list
    renderChart();
    renderResults();
  }
}

function getData() {
  for (var i = 0; i < goats.length; i++) {
    votesArray.push(goats[i].votes);
    viewsArray.push(goats[i].views);
    namesArray.push(goats[i].name);
  }
}
// data we need:
// votes
// views
// names
function renderChart() {
  getData();
  var chartObject = {
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [{
        label: '# of VOTES',
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
        data: votesArray,
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
      },
      {
        label: '# of VIEWS',
        data: viewsArray,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };


  var myChart = new Chart(ctx, chartObject);  //eslint-disable-line

}


// event listener takes 2 parameters: event, and the calllback function
myContainer.addEventListener('click', handleClick);
