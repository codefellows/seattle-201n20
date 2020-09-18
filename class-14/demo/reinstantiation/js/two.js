'use strict';

var catbutton = document.getElementById('catbutton');

var handleCatButtonClick = function(){
  var catsFromLS = JSON.parse(localStorage.cats);
  console.log('allCats array after retrieving from local storage', allCats);
  for (var i = 0; i < catsFromLS.length; i++){
    var newCat = new Cat(catsFromLS[i].name);
    newCat.render();
  }
  console.log('allCats array after reinstantiating through our Cat constructor', allCats);
};

catbutton.addEventListener('click', handleCatButtonClick);
