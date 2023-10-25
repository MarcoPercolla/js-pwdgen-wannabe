const nome = prompt( "Inserisci il tuo nome", "Gollum");
const cognome = prompt( "Inserisci il tuo cognome", "Smeagol");
const colore = prompt( "Inserisci il tuo colore preferito", "tesssoro");
const password = `${nome}${cognome}${colore}`;


document.getElementById("password").innerHTML = `La tua password è:  ${password}#23`;