// script.js

const hamburg = document.querySelector(".hamburg");
const cancel = document.querySelector(".cancel");
const dropdown = document.querySelector(".dropdown");

// OPEN MENU
hamburg.addEventListener("click", () => {
    dropdown.style.right = "0";
});

// CLOSE MENU
cancel.addEventListener("click", () => {
    dropdown.style.right = "-100%";
});

// TYPEWRITER EFFECT
const texts = [
    "BSIT STUDENT"
];

let speed = 100;
const textElements = document.querySelector(".typewriter span");

let textIndex = 0;
let charIndex = 0;

function typeWriter(){

    if(charIndex < texts[textIndex].length){

        textElements.innerHTML += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, speed);

    }else{

        setTimeout(eraseText, 1500);
    }
}

function eraseText(){

    if(textElements.innerHTML.length > 0){

        textElements.innerHTML =
        textElements.innerHTML.slice(0,-1);

        setTimeout(eraseText, 50);

    }else{

        textIndex = (textIndex + 1) % texts.length;

        charIndex = 0;

        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;