//TARIFFA FISSA
const kmRate = 0.21;
console.log(`Tariffa fissa per km: ${kmRate}`);

// Stringa
string = "Il prezzo base è:"
stringJunior = "Il prezzo scontato per i minorenni è:"
stringSenior = "Il prezzo scontato per i senior è:"

// CHIEDO ALL'UTENTE KM DA PERCORRERE E ETA' TRAMITE INPUT
const kmToTravel = document.getElementById("km");

const ageUser = document.getElementById("age");

const date = document.getElementById("send-date");
date.addEventListener ("click", function() {
    console.log("quanti km fa?", kmToTravel.value);
    console.log("quanti anni ha?", ageUser.value);
    
    const priceTicket = kmRate * kmToTravel.value
    priceTicketToFixed = priceTicket.toFixed();
    console.log(`Prezzo base del biglietto: ${priceTicketToFixed}`);

//Se l'utente è minorenne
if (ageUser.value <18) {
    let priceJunior = (priceTicket * 0.8);
    priceJuniorToFixed = priceJunior.toFixed(2);
    console.log(`Prezzo Ticket con sconto per minorenni: ${priceJuniorToFixed}`);
    document.getElementById("result-junior").innerHTML = stringJunior + " " + priceJuniorToFixed;
}
//Se l'utente è senior
else if (ageUser.value >65) {
    let priceSenior = (priceTicket * 0.6);
    priceSeniorToFixed = priceSenior.toFixed(2);
    console.log(`Prezzo Ticket con sconto per senior: ${priceSeniorToFixed}`);
    document.getElementById("result-senior").innerHTML = stringSenior + " " + priceSeniorToFixed;
}

document.getElementById("result").innerHTML = string + " " + priceTicketToFixed
}) 




