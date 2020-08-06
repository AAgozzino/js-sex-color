// Chiedere il nome
var nome = prompt("Inserisci il tuo nome");

// Chiedere il sesso
var sesso = prompt("Inserisci maschio o femmina");

/*  Validare input
    Se maschio stampare nome azzurro
    Se femmina stampare nome rosa
*/
var nomeColore = document.getElementById("nome-colore")

if (sesso === "maschio") {
  nomeColore.style.color = "lightblue"
}
else {
  nomeColore.style.color = "pink"
}
nomeColore.innerHTML = nome
