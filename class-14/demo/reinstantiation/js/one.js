'use strict';

if (localStorage.cats) {
  var catsFromLS = JSON.parse(localStorage.cats);
  // catsFromLS is now an array of generic objects
  for (var i = 0; i < catsFromLS.length; i++) {
    new Cat(catsFromLS[i].name);
    allCats[i].render();
  }
}

catform.addEventListener('submit', handleCatSubmit);
