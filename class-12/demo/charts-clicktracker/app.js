'use strict';

// Global vars
var likeCounter = 0;
var allGoats = [];
var leftGoatThatIsOnThePage;
var rightGoatThatIsOnThePage;
var previouslyPickedGoats = [];

// References to the DOM TODO: refactor
var leftImage = document.getElementById('left_goat_img');
var rightImage = document.getElementById('right_goat_img');


var allGoatContainerSectionEl = document.getElementById('all_goats');
// =======================================
// Constructors
// =======================================

var GoatImage = function(url, name){
  this.imageUrl = url;
  this.name = name;
  this.clicks = 0;

  allGoats.push(this);
};

// =======================================
// Other Functions
// =======================================

function handleClickOnBothGoats(event){
  if(event.target.tagName !== 'IMG'){
    return;
  }
  // if some other other thing is wrong, stop (return)
  // iof another thing is wrong, stop

  console.log('clicked on a goat');
  //increment total clicks
  likeCounter++;
  // increment left goat's clicks

  //TODO: refactor
  if(event.target.id === 'left_goat_img'){
    leftGoatThatIsOnThePage.clicks++;
  }
  if(event.target.id === 'right_goat_img'){
    rightGoatThatIsOnThePage.clicks++;
  }

  var tempPickedGoats = [];
  //TODO: refactor to be repeatable
  do {// we are selecting a previous goat
    // pick a new 2 goats,
    var leftGoatIndex = Math.floor(Math.random() * allGoats.length);

  } while (
    previouslyPickedGoats.includes(allGoats[leftGoatIndex])||
    tempPickedGoats.includes(allGoats[leftGoatIndex])

  );

  tempPickedGoats.push(allGoats[leftGoatIndex]);

  do {// we are selecting a previous goat
    // pick a new 2 goats,
    var rightGoatIndex = Math.floor(Math.random() * allGoats.length);

  } while (
    previouslyPickedGoats.includes(allGoats[rightGoatIndex]) ||
    tempPickedGoats.includes(allGoats[rightGoatIndex])
  );
  tempPickedGoats.push(allGoats[rightGoatIndex]);

  leftGoatThatIsOnThePage = allGoats[leftGoatIndex];
  rightGoatThatIsOnThePage = allGoats[rightGoatIndex];

  // and put them on the page
  leftImage.src = leftGoatThatIsOnThePage.imageUrl;
  rightImage.src = rightGoatThatIsOnThePage.imageUrl;

  previouslyPickedGoats = [];
  previouslyPickedGoats.push(allGoats[leftGoatIndex]);
  previouslyPickedGoats.push(allGoats[rightGoatIndex]);

  // stop after 10 clicks
  if(likeCounter > 9){
    // stop listening for clicks on the left and right goat
    allGoatContainerSectionEl.removeEventListener('click', handleClickOnBothGoats);
    makeAGoatChart();
  }

}

// ===================================
// Initialize the Page
// ===================================

allGoatContainerSectionEl.addEventListener('click', handleClickOnBothGoats);

// Instantiate GoatImage objects
new GoatImage('./images/cruisin-goat.jpg', 'Cruisin Goat');
new GoatImage('./images/float-your-goat.jpg', 'Float Goat');
new GoatImage('./images/goat-out-of-hand.jpg', 'Hand Goat');
new GoatImage('./images/kissing-goat.jpg', 'Kiss Goat');
// new GoatImage('./images/sassy-goat.jpg', 'Sass Goat');
// new GoatImage('./images/smiling-goat.jpg', 'Smile Goat');
// new GoatImage('./images/sweater-goat.jpg', 'Sweet Goat');

// When I first load the page, I need to know which goat is left and right, sso they can track their clicks in the javascript
leftGoatThatIsOnThePage = allGoats[1];
rightGoatThatIsOnThePage = allGoats[0];


// ==================================
// ChartJs Implementation
// ==================================

function makeAGoatChart(){

  var goatNamesArray = [];
  var goatLikesArray =[];

  for(var i = 0; i < allGoats.length; i++){
    var singleGoatName = allGoats[i].name;
    goatNamesArray.push(singleGoatName);
  }

  for(var i = 0; i < allGoats.length; i++){
    var singleGoatLikes = allGoats[i].clicks;
    goatLikesArray.push(singleGoatLikes);
  }

  var ctx = document.getElementById('goatChart').getContext('2d');
  var goatChart = new Chart(ctx, {
  // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: goatNamesArray,
      datasets: [{
        label: 'Goat Likes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: goatLikesArray
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
