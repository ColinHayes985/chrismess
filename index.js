const button = document.querySelector('button');
const bonusButton = document.querySelector('#bonusCreditButton');
const submitButton = document.getElementByName('sub');
input = document.getElementByName('text')

function changeHeading(){
    const h1 = document.querySelector('h1');
    h1.textContent='Chris Hemsworth';
}

function changeHeadingBonus(){
    const h1 = document.querySelector('#bonusCreditHeading');
    h1.textContent='Chris Pine';
}

function submit(){
    const h1 = document.querySelector('h1');
    h1.textContent=input;
}

function submitKey(){
    const h1 = document.querySelector('h1');
    h1.textContent=input;
}

button.addEventListener('click', changeHeading);
bonusButton.addEventListener('click', changeHeadingBonus);
submitButton.addEventListener('click', submit);
submitButton.addEventListener('keypress', submitKey)
