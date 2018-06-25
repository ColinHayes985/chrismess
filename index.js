const button = document.querySelector('button');
const bonusButton = document.querySelector('#bonusCreditButton');
const submitButton = document.querySelector('#submit');

function changeHeading(){
    const h1 = document.querySelector('h1');
    h1.textContent='Chris';
}

function changeHeadingBonus(){
    const h1 = document.querySelector('#bonusCreditHeading');
    h1.textContent='Chris Pratt controversial actions during Infinity War were very in character for Star-Lord';
}

function submit(){
    const h1 = document.querySelector('h1');
    h1.textContent='Chris';
}

button.addEventListener('click', changeHeading);
bonusButton.addEventListener('click', changeHeadingBonus);
submitButton.addEventListener('click', submit);
