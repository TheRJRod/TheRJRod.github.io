'use strict';

// CAROUSEL SECTION

const next1 = document.getElementById('next1');
const prev1 = document.getElementById('prev1');
const next2 = document.getElementById('next2');
const prev2 = document.getElementById('prev2');
const next3 = document.getElementById('next3');
const prev3 = document.getElementById('prev3');
const fitbottom = document.querySelector('.fitnessbottom');
const blogbottom = document.querySelector('.blogbottom');
const bootbottom = document.querySelector('.bootbottom');

next1.addEventListener('click' , () => {
fitbottom.classList.add('hidden');
blogbottom.classList.remove('hidden');
});

prev1.addEventListener('click', () => {
    fitbottom.classList.add('hidden');
    bootbottom.classList.remove('hidden');
});

next2.addEventListener('click', () => {
blogbottom.classList.add('hidden');
bootbottom.classList.remove('hidden');

});

prev2.addEventListener('click', () => {
  fitbottom.classList.remove('hidden');
  blogbottom.classList.add('hidden');
} );

next3.addEventListener('click', () => {
bootbottom.classList.add('hidden');
fitbottom.classList.remove('hidden');
});

prev3.addEventListener('click', () => {
  bootbottom.classList.add('hidden');
  blogbottom.classList.remove('hidden');

});

// MODAL SECTION

// Get the modal
let modal = document.getElementById("myModal");
let modal1 = document.getElementById("myModal1");
// let modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let btn1= document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close")[1];
let span2 = document.getElementsByClassName("close")[2];


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};
btn1.onclick = function() {
  modal1.style.display = "block";
};
// btn2.onclick = function() {
//   modal2.style.display = "block";
// };



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
 
};

span1.onclick = function() {
  modal1.style.display = "none";
 
};

// span2.onclick = function() {
//   modal2.style.display = "none";
 
// };

// When the user clicks anywhere outside of the modal, close it

modal.addEventListener('click', () => {
  modal.style.display= 'none';
})

modal1.addEventListener('click', () => {
  modal1.style.display= 'none';
})

// modal2.addEventListener('click', () => {
//   modal2.style.display= 'none';
// })

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display= 'none';
    modal1.style.display= 'none';
    modal2.style.display= 'none';

  }
})

// HAMBURGER MENU

const menu = document.getElementsByClassName('menu')[0];
const menuOverlay = document.getElementsByClassName('menuoverlay')[0];
const menuClose = document.getElementsByClassName('menuclose')[0];

menu.addEventListener('click', () => {
  menuOverlay.classList.remove('hidden');

});

menuClose.addEventListener('click', () => {
  menuOverlay.classList.add('hidden');
});

window.onclick = function(event) {
  if (event.target == menuOverlay ) {
    menuOverlay.classList.add('hidden');
  } 
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    
    menuOverlay.classList.add('hidden');

  }
});