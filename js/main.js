console.log("Ciao Giuseppe")

//TARIFFA FISSA
const kmRate = 0.21;
console.log(`Tariffa fissa per km: ${kmRate}`)

// CHIEDO ALL'UTENTE KM DA PERCORRERE E ETA' TRAMITE INPUT
const kmToTravel = document.getElementById("km").value
console.log(`Km da percorrere: ${kmToTravel}`);

const ageUser = document.getElementById("age").value
console.log(`Età dell'utente: ${ageUser}`);

const priceTicket = kmRate * kmToTravel
console.log(`Prezzo base del biglietto: ${priceTicket}`)

//Se l'utente è minorenne
if (ageUser <18) {
    let priceJunior = (priceTicket * 0.8);
    console.log(`Prezzo Ticket con sconto per minorenni: ${priceJunior}`);
}
else if (ageUser >65) {
    let priceSenior = (priceTicket * 0.6);
    console.log(`Prezzo Ticket con sconto per senior: ${priceSenior}`);
}
