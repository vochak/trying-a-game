const candy = document.querySelector("#candy");
const chocolate = document.querySelector("#chocolate");
const sweets = document.querySelector("#sweets");
const words = document.querySelector("#words")


function goCandy () {
    candy.innerText = "welcome to candy store";
    chocolate.innerText = "purchase candy";
    words.innertext = "hhhhhhhhhhh";
    sweets.innerText = "go home"
}

function goChoco () {} 
    
function goSweets () {
    console.log("going to sweet store");
}
function xWords () {
    words.innertext = "hhhhhhhhhhh";
}
//initiallize buttons
candy.onclick = goCandy;
chocolate.onclick = goChoco;
sweets.onclick = goSweets;
words.onclick = xWords;
