'use strict';

/* Search Filter */
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


  const abs = document.querySelector('.abs');
  const biceps = document.querySelector('.bis');
  const chest = document.querySelector('.chest');
  const legs = document.querySelector('.legs');
  const shoulders = document.querySelector('.shoulders');
  const triceps = document.querySelector('.triceps');
  let absconstruct = document.querySelector('.instruction');
  let bicepsconstruct = document.querySelector('.instruction2');
  let chestconstruct = document.querySelector('.instruction3');
  let legsconstruct = document.querySelector('.instruction4');
  let shouldersconstruct = document.querySelector('.instruction5');
  let tricepsconstruct = document.querySelector('.instruction6');
  let ul = document.querySelector('#myUL');
  let input = document.querySelector('#myInput');
  let closed = document.querySelectorAll('.close');


for ( let i = 0; i < closed.length; i++) {
  closed[i].addEventListener('click', () => {
    absconstruct.classList.add('hidden');
    bicepsconstruct.classList.add('hidden');
    chestconstruct.classList.add('hidden');
    legsconstruct.classList.add('hidden');
    shouldersconstruct.classList.add('hidden');
    tricepsconstruct.classList.add('hidden');
    ul.classList.remove('hidden');
    input.classList.remove('hidden');
  })
}

  abs.addEventListener('click', () => {
    absconstruct.classList.toggle('hidden')
    ul.classList.add('hidden')
    input.classList.add('hidden')
    absconstruct.style.marginTop = '30px';
  });

  biceps.addEventListener('click', () => {
    bicepsconstruct.classList.toggle('hidden')
    ul.classList.add('hidden')
    input.classList.add('hidden')
    bicepsconstruct.style.marginTop = '30px';
  });

  chest.addEventListener('click', () => {
    chestconstruct.classList.toggle('hidden')
    ul.classList.add('hidden')
    input.classList.add('hidden')
    chestconstruct.style.marginTop = '30px';
  });

  legs.addEventListener('click', () => {
    legsconstruct.classList.toggle('hidden')
    ul.classList.add('hidden')
    input.classList.add('hidden')
    legsconstruct.style.marginTop = '30px';
  });

  shoulders.addEventListener('click', () => {
    shouldersconstruct.classList.toggle('hidden')
    ul.classList.add('hidden')
    input.classList.add('hidden')
    shouldersconstruct.style.marginTop = '30px';
  });
  triceps.addEventListener('click', () => {
    tricepsconstruct.classList.toggle('hidden')
    ul.classList.add('hidden')
    input.classList.add('hidden')
    tricepsconstruct.style.marginTop = '30px';
  
  });

   
  const port1 = document.querySelector('.port1');





  /* Choose your path fitness page */


  
  function Naruto () {
    const choose3 = document.getElementsByClassName('choose3');
    choose3[0].classList.remove('hidden');
  }
  
  function NarutoOff () {
    const choose3 = document.getElementsByClassName('choose3');
    choose3[0].classList.add('hidden');
  }

  
  function Pain () {
    const choose4 = document.getElementsByClassName('choose4');
    choose4[0].classList.remove('hidden');
  }
  
  function PainOff () {
    const choose4 = document.getElementsByClassName('choose4');
    choose4[0].classList.add('hidden');
  }
  




