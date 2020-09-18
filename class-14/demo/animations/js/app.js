'use strict';

// TODO hey, what about an array of tree objects! that would have file path for picture, and the tree info
// TODO don't repeat the correct picture
// TODO randomize tree image placement

// TODO a way to track a score - score should increment by 1 when they get something right
// TODO a way to track how many attempts they've used - increment attempt in the event handler when any image is clicked
// TODO some way to play again without having to refresh
// TODO a way to stop the event listener from doing its thing when the num of attempts reaches a maximum number
// TODO when they reach the max, show a chart with the score and numAttempts

// Persistence of data
// When we persist data, we need to be able to do four things with it:
// create the data - setItem in localStorage
// retrieve it
// update it - setItem in localStorage
// delete it

var treeNames = ['Big_Leaf_Maple', 'Douglas-fir', 'Madrona', 'Pacific_Silver_Fir', 'Ponderosa_Pine', 'Sitka_Spruce', 'Western_Hemlock', 'Western_Red_Cedar'];
var correctTree = '';
var wrongTree = '';
var attempts = 0;
var maxAttempts = 5;
var treeNameElement = document.getElementById('treeName');
var treeImagesParent = document.getElementById('treeImages');
var responseElement = document.getElementById('response');
var scoreElement = document.getElementById('score');
var attemptsElement = document.getElementById('attempts');

function setup () {
  // call this with a random name
  correctTree = generateRandomTree();
  wrongTree = generateRandomTree();
  updateTreeName(correctTree);

  if (attempts) {
    treeImagesParent.removeChild(treeImagesParent.lastChild);
    treeImagesParent.removeChild(treeImagesParent.lastChild);
  }

  renderTreeImage(correctTree);
  renderTreeImage(wrongTree);
  updateScoreElement();
  updateAttempts();
}

setup();

treeImagesParent.addEventListener('click', function (event) {
  if (attempts === maxAttempts) {
    return;
  }

  var answer = event.target.getAttribute('id');
  attempts++;

  if (answer === correctTree) {
    incrementScore();
    renderResponse('woohoo!');
  } else {
    renderResponse('wrong! virus alert.');
  }

  setup();

  if (attempts === maxAttempts) {
    // do things
    // draw();
    chart();
  }
});

function generateRandomTree () {
  var index = Math.floor(Math.random() * treeNames.length);
  return treeNames[index];
}

function updateTreeName (treeName) {
  treeNameElement.textContent = treeName;
}

function renderTreeImage (treeName) {
  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + treeName + '.jpeg');
  img.setAttribute('id', treeName);
  treeImagesParent.append(img);
}

function renderResponse (response) {
  responseElement.textContent = response;
}

function incrementScore () {
  var score = getScore();
  score++
  createOrUpdateScore(score);
  updateScoreElement();
}

function updateScoreElement () {
  scoreElement.textContent = getScore() || 0;
}

function getScore () {
  var score = localStorage.getItem('score');
  if (score !== null) {
    score = parseInt(score);
  }
  return score;
}

function createOrUpdateScore (value) {
  value = value.toString();
  localStorage.setItem('score', value);
  var score = localStorage.getItem('score');
  return score;
}

function deleteScore () {
  localStorage.removeItem('score');
  return null;
}

function getTreeState () {
  var storageTreeState = localStorage.getItem('treeState');
  //unstringify it
  var parsedTreeState = JSON.parse(storageTreeState);
  return parsedTreeState;
}

function createOrUpdateTreeState (correctTree, wrongTree) {
  var treeState = {
    correctTree: correctTree,
    wrongTree: wrongTree
  };
  // convert to a stringified format
  var stringifiedTreeState = JSON.stringify(treeState);
  localStorage.setItem('treeState', stringifiedTreeState);
  var storageTreeState = localStorage.getItem('treeState');
  //unstringify it
  var parsedTreeState = JSON.parse(storageTreeState);
  return parsedTreeState;
}

function deleteTreeState () {
  localStorage.removeItem('treeState');
}

function clearAllData () {
  localStorage.clear();
  return null;
}

function updateAttempts () {
  attemptsElement.textContent = maxAttempts - attempts;
}

function chart () {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
  var score = getScore();

  // modeled after the Getting Started example in the chartJS docs
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['Score', 'Attempts'],
      datasets: [{
        label: 'Number of Correct Answers',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [score, maxAttempts],
      }]
    },

    // Configuration options go here
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function draw() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#26b7cf';
  ctx.fillRect(10, 10, 20, 100);

  ctx.fillStyle = '#cf2663';
  ctx.fillRect(80, 10, 20, 100);

  ctx.fillText('My string', 10, 100)
}
