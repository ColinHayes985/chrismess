const button = document.querySelector('button')

function changeHeading(){
    const h1 = document.querySelector('h1')
    h1.textContent='Chris'
}

button.onclick(changeHeading);