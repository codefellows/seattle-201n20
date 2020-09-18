'use strict';

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats
  Let students participate by suggesting the steps needed to make the app run
  Continue until students have provided enough detail that they feel confident they could build the app themselves

  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 25 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which goat was clicked on
        - update clicke images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 goats, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  var Image = function ()
  {
    name : 'cool goat',
    clicks: 0,
    times shown: 0,
    url : 'cool-goat.jpg'
  }

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/

// Globals
var goatImageSectionTag = document.getElementById('all_goats');
var leftGoatImageTag = document.getElementById('left_goat_img');
var rightGoatImageTag = document.getElementById('right_goat_img');



var totalClicks = 0;

// Variables to store the goats already on the page
var leftGoatOnThePage = null;
var rightGoatOnThePage = null;

var GoatPicture = function (name, imageSrc) {
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
  this.url = imageSrc;

  // the allImages array is a property of the GoatPicture constructor
  GoatPicture.allImages.push(this);
};

GoatPicture.allImages = [];

/*
Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
    */

var renderNewGoats = function (leftIndex, rightIndex){
  leftGoatImageTag.src = GoatPicture.allImages[leftIndex].url;
  rightGoatImageTag.src = GoatPicture.allImages[rightIndex].url;
};

var pickNewGoats = function(){
  var leftIndex = Math.floor(Math.random() * GoatPicture.allImages.length);

  do {
    var rightIndex = Math.floor(Math.random() * GoatPicture.allImages.length);
  } while (rightIndex === leftIndex);
  console.log(GoatPicture.allImages[leftIndex].name, GoatPicture.allImages[rightIndex].name);

  leftGoatOnThePage = GoatPicture.allImages[leftIndex];
  rightGoatOnThePage = GoatPicture.allImages[rightIndex];

  renderNewGoats(leftIndex, rightIndex);
};

var handleClickOnGoat = function(event){
  console.log('im still alive');
  // if they can still click, do clicky things
  if(totalClicks < 5){

    var thingWeClickedOn = event.target;
    var id = thingWeClickedOn.id;

    if(id === 'left_goat_img' || id === 'right_goat_img'){
      //track the goats
      // increment the goat image in the left_goat_image slot's clicks
      // if goat is the left goat, increment the left goat)
      if(id === 'left_goat_img'){
        leftGoatOnThePage.clicks++;
      }

      if(id === 'right_goat_img'){
        rightGoatOnThePage.clicks++;
      }

      leftGoatOnThePage.timesShown++;
      rightGoatOnThePage.timesShown++;

      //after we update the old, pick new pictures
      pickNewGoats();
    }
    console.log(event.target.id);
  }
  // increment amount of clicks
  totalClicks++;
  //when they reach total max clicks, remove the clicky function
  if(totalClicks === 5){
    goatImageSectionTag.removeEventListener('click', handleClickOnGoat);
    console.log('you picked 5 goats, thanks!');

    //TODO: display the clicks to the page
  }
};



// leftGoatImageTag.addEventListener('click', handleClickOnGoat);
// rightGoatImageTag.addEventListener('click', handleClickOnGoat);

goatImageSectionTag.addEventListener('click', handleClickOnGoat);
// goatImageSectionTag.removeEventListener('click', handleClickOnGoat);


// Instantiate my image objects

new GoatPicture('Cruising Goat', './images/cruisin-goat.jpg');

new GoatPicture('Float Your Goat', './images/float-your-goat.jpg');
new GoatPicture('Kissing Goat', './images/kissing-goat.jpg');
new GoatPicture('Sweater Goat', './images/sweater-goat.jpg');

//Track the default goats;

leftGoatOnThePage = GoatPicture.allImages[3];
rightGoatOnThePage = GoatPicture.allImages[0];

pickNewGoats();
