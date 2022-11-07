// Chiedere all'utente il numero di chilometri che vuole percorrere e l'eta' del passeggero

// Chidere l'eta dell'Utente
let utenteNome = prompt("Come ti chiami?")

document.getElementById("Nome").innerHTML = `${utenteNome}`;




let etaUtente = parseInt(prompt("Quanti anni hai?"));
let tratto = parseInt(prompt("Quanti km vuoi percorrere?"));

// 0.21 € al km
const tariffaAlKm = 0.21

let prezzoBiglietto = (tratto * tariffaAlKm).toFixed(2);


// Se l'utente e' minorenne ha lo sconto del 20%
if ( etaUtente < 18 ) {
    let sconto = prezzoBiglietto * 20 / 100;
    let bigliettoScontato = (prezzoBiglietto - sconto).toFixed(2);
    // output
    // Prezzo calcolato
    document.getElementById("tariffa").innerHTML = ` E' stato applicato uno sconto del 20%.  Importo Totale: €${bigliettoScontato}. `;
}

// Se l'utente e' anziano ha lo sconto del 40%
else if ( etaUtente >= 64) {
    let sconto = prezzoBiglietto * 40 / 100;
    let bigliettoScontato = (prezzoBiglietto - sconto).toFixed(2);
    // output
    // Prezzo calcolato
    document.getElementById("tariffa").innerHTML = `E' stato applicato uno sconto del 20%.  Importo Totale: €${bigliettoScontato}. `;
}

// se l'utente non rientra nelle categorie ha il prezzo pieno
else {
    document.getElementById("tariffa").innerHTML = ` Prezzo biglietto: €${prezzoBiglietto}.`
}




