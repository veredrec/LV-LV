// ARRAYS
var giftsArr = [
  '2110',
  '1982',
  '0310',
  '1234',
  '0903',
  '1330',
  '0911',
  '7813',
  '1352',
  '6375',
  '13149',
  '54852',
  '1203',
  '39189',
  '715',
  '34122',
  '220'
];
// 852', '193507', '1453', '1912', '132', '2694', '9654739'
var namesGift = [
  'ian',
  'yitzhak',
  'daniel',
  'anat',
  'randall',
  'gal',
  'molly',
  'dudi',
  'tommi',
  'ophir',
  'jan',
  'omer',
  'adam',
  'hila',
  'chen',
  'merle',
  'michal'
];

var wishesArr = [
  '2110',
  '1982',
  '0310',
  '1234',
  '0903',
  '1330',
  '0911',
  '7813',
  '1352',
  '6375',
  '13149',
  '54852',
  '1203',
  '39189',
  '715',
  '34122'
];
var namesWish = [
  'ian',
  'yitzhak',
  'daniel',
  'anat',
  'randall',
  'gal',
  'molly',
  'dudi',
  'tommi',
  'ophir',
  'jan',
  'omer',
  'adam',
  'hila',
  'chen',
  'merle'
];

var funArr = [
  'Fight It Out!',
  'Who Has The Peanuts?',
  'How Many?',
  'Tower of Babel',
  'One is Not Enough',
  'Basketsocks',
  'Tweezers-It'
];

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
    if (
      !!giftsArr.reduce(function(a, b) {
        return a === b ? a : NaN;
      })
    ) {
      result.textContent = 'No more secret gifts :)';
    } else {
      if (giftsArr[num] === 'done') {
        getRandom();
      } else {
        result.textContent = giftsArr[num];
        name = namesGift[num];
        giftsArr[num] = 'done';
        console.log('gifts ', giftsArr);
      }
    }
  } else if (currentArr === 'wishesArr') {
    if (
      !!wishesArr.reduce(function(a, b) {
        return a === b ? a : NaN;
      })
    ) {
      result.textContent = 'No more secret wishes :)';
    } else {
      if (wishesArr[num] === 'done') {
        getRandom();
      } else {
        result.textContent = wishesArr[num];
        name = namesWish[num];
        wishesArr[num] = 'done';
        console.log('wishes ', wishesArr);
      }
    }
  } else {
    if (
      !!funArr.reduce(function(a, b) {
        return a === b ? a : NaN;
      })
    ) {
      result.textContent = 'No more fun games :)';
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
