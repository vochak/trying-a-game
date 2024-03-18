const button1 = document.querySelector("#candy");
const button2 = document.querySelector("#chocolate");
const button3 = document.querySelector("#sweets");
const words = document.querySelector("#words");

//initialize
button1.onclick = goCandy;
button2.onclick = goChoco;
button3.onclick = goSweets;

function go () {
    button1.innerText = "CANDYx";
    button2.innerText = "CHOCO";
    button3.innerText = "SWEETS";
    button1.onclick = goCandy;
    button2.onclick = goChoco;
    button3.onclick = goSweets;
}
function goCandy () {
    button1.innerText = "a";
    button2.innerText = "b";
    button3.innerText = "go back";
    button3.onclick = go;

}




 