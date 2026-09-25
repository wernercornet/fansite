let blokje = document.querySelector("#blokje");
let knop2 = document.querySelector("#knop2");
let welkomTitel = document.querySelector("#welkomTitel");
let naam = document.querySelector("#naam");

blokje.style.backgroundColor = "yellow";
blokje.style.fontSize = "40px";
blokje.style.border = "5px solid black";

function zegHallo() {
    if (blokje.style.backgroundColor === "tomato") {
        blokje.style.backgroundColor = "yellow";
        blokje.innerHTML = "Hello World";
    } else {
        blokje.style.backgroundColor = "tomato";
        blokje.innerHTML = "Hallo!";
    }
}

let knop = document.querySelector("#knop");
knop.addEventListener("click", zegHallo);

function leesInput() {
    welkomTitel.innerHTML += naam.value;
}

knop2.addEventListener("click", leesInput);
