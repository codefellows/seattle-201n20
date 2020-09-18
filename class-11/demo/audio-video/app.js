'use strict';

var levees = document.getElementById('levees');
var randomizer = document.getElementById('randomizer');

randomizer.addEventListener('click', function(){
  levees.volume = Math.random();
  levees.autoplay = true;
});
