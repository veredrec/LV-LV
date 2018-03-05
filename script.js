// ARRAYS
var giftsArr = ['0903', '1982', '0911', '1234'];
var wishesArr = ['0903', '1982', '0911', '1234'];
var funArr = ['Cup Stack', 'Take That Peanut!', 'In the Basket'];
var namesGift = ['ian', 'yitzhak', 'daniel', 'anat'];
var namesWish = ['ian', 'yitzhak', 'daniel', 'anat'];

var currentArr;
var name;

// Set Random Number
var result = document.getElementById('number');
var gift = document.getElementById('gift');
var wish = document.getElementById('wish');
var fun = document.getElementById('fun');

gift.addEventListener('click', function() {
  currentArr = 'giftsArr';
  getRandom();
});
wish.addEventListener('click', function() {
  currentArr = 'wishesArr';
  getRandom();
});
fun.addEventListener('click', function() {
  currentArr = 'funArr';
  getRandomFun();
});

function getRandom() {
  var num = Math.floor(Math.random() * giftsArr.length);
  checkRandom(num);
}

function getRandomFun() {
  var num = Math.floor(Math.random() * funArr.length);
  checkRandom(num);
}

function checkRandom(num) {
  if (currentArr === 'giftsArr') {
    if (giftsArr[num] === 'done') {
      getRandom();
    } else {
      result.textContent = giftsArr[num];
      name = namesGift[num];
      giftsArr[num] = 'done';
      console.log('gifts ', giftsArr);
    }
  } else if (currentArr === 'wishesArr') {
    if (wishesArr[num] === 'done') {
      getRandom();
    } else {
      result.textContent = wishesArr[num];
      name = namesWish[num];
      wishesArr[num] = 'done';
      console.log('wishes ', wishesArr);
    }
  } else {
    if (funArr[num] === 'done') {
      getRandomFun();
    } else {
      result.textContent = funArr[num];
      funArr[num] = 'done';
      console.log('fun ', funArr);
    }
  }
}

// Check input
var go = document.getElementById('go');
var face = document.getElementById('face');

go.addEventListener('click', function() {
  var input = document.getElementById('input');
  console.log(name);
  if (input.value.toLowerCase() !== name) {
    face.src = './assets/sad.png';
    input.value = '';
  } else {
    face.src = './assets/happy.png';
    input.value = '';
    addPoints();
  }
});

// LV points
var points = 0;
var lv = document.getElementById('lv');
function addPoints() {
  points++;
  lv.textContent = points;
}

// TODO: add that if all is 'done' there is a message and it stops from running
// Populate all the arrays
// change border when focus in input
// maybe make desktop media queries
