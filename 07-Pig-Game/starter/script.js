'use strict';

// Selecting Elements
const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');  //another way of selecting id using getElementById
const curr0Ele = document.querySelector('#current--0');
const curr1Ele = document.querySelector('#current--1');
const diceEle = document.querySelector('.dice');
const btnNew  = document.querySelector('.btn--new')
const btnRoll  = document.querySelector('.btn--roll')
const btnHold  = document.querySelector('.btn--hold')

// starting conditions
score0Ele.textContent = 0;
score1Ele.textContent =0;
diceEle.classList.add('hidden');

const score = [0,0];
let currentScore = 0;
let activePlayer = 0;

// rolling dice functionality
btnRoll.addEventListener('click', function(){
  // 1. generate random dice roll
  const dice = Math.trunc(Math.random()*6)+1;
  

  // 2. display dice
  diceEle.classList.remove('hidden');
  diceEle.src = `dice-${dice}.png`;

  // 3. check for rolled 1: if true switch the next
  if(dice!==1){
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else{
    // change the player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer= activePlayer===0?1:0;  //if active player is 0 then switch to 1 and if active player is 1 then switch to 0
    currentScore = 0;  //current score of switched player is now zero 
    player0Ele.classList.toggle('player--active');
    player1Ele.classList.toggle('player--active');
  }
})