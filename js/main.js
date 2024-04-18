//TARIFFA FISSA
const kmRate = 0.21;
console.log(`Tariffa fissa per km: ${kmRate}`);

// CHIEDO ALL'UTENTE KM DA PERCORRERE E ETA' TRAMITE INPUT
const kmToTravel = document.getElementById("km");

const ageUser = document.getElementById("age");

const priceTicket = kmRate * kmToTravel.value
console.log(`Prezzo base del biglietto: ${priceTicket}`);

const date = document.getElementById("send-date");
date.addEventListener ("click", function() {
    console.log("quanti km fa?", kmToTravel.value)
    console.log("quanti anni ha?", ageUser.value)
}) 

//Se l'utente è minorenne
if (ageUser.value <18) {
    let priceJunior = (priceTicket * 0.8);
    console.log(`Prezzo Ticket con sconto per minorenni: ${priceJunior}`);
}
else if (ageUser.value >65) {
    let priceSenior = (priceTicket * 0.6);
    console.log(`Prezzo Ticket con sconto per senior: ${priceSenior}`);
}
