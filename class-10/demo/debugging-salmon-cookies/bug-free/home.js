'use strict';

var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var fishImgs = document.getElementsByClassName('carouselImg');
  for(i = 0; i < fishImgs.length; i++){
    fishImgs[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > fishImgs.length) {slideIndex = 1;}
  fishImgs[slideIndex - 1].style.display = 'block';
  setTimeout(carousel,2000);
}
