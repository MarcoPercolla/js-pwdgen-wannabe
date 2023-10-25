const nome = prompt( "Inserisci il tuo nome", "Gollum");
const cognome = prompt( "Inserisci il tuo cognome", "Smeagol");
const colore = prompt( "Inserisci il tuo colore preferito", "tesssoro");


document.getElementById("password").innerHTML = `La tua password è:  ${nome}${cognome}${colore}#23`;