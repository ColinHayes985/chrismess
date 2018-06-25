const button = document.querySelector('button');
const bonusButton = document.querySelector('#bonusCreditButton');

function changeHeading(){
    const h1 = document.querySelector('h1');
    h1.textContent='Chris';
}

function changeHeadingBonus(){
    const h1 = document.querySelector('#bonusCreditHeading');
    h1.textContent='Chris Pratt controversial actios durig Infinity War were very in character for Star-Lord';
}

button.addEventListener('click', changeHeading);
bonusButton.addEventListener('click', changeHeadingBonus);
