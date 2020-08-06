// Chiedere il nome
var nome = prompt("Inserisci il tuo nome");

// Chiedere il sesso
var sesso = prompt("Inserisci maschio o femmina");

/*  Validare input
    Se maschio stampare nome azzurro
    Se femmina stampare nome rosa
*/
var nomeColore = document.getElementById("nome-colore")
if (!isNaN(nome) || !isNaN(sesso) || nome === null || sesso === null || nome === "" || sesso ==="") {
  alert("Errore: inserisci nome e sesso")
}
else if (sesso === "maschio") {
  // nomeColore.style.color = "lightblue";
  nomeColore.classList.add("lblue");
}
else if (sesso === "femmina") {
  // nomeColore.style.color = "pink";
  nomeColore.classList.add("pink");
}
else {
  alert("Errore: non hai inserito il sesso")
}
nomeColore.innerHTML = nome
