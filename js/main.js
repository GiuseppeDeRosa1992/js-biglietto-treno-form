//TARIFFA FISSA
const kmRate = 0.21;
console.log(`Tariffa fissa per km: ${kmRate}`);

// Stringa
string = "Il prezzo del biglietto è:"
stringJunior = "Il prezzo scontato per i minorenni è:"
stringSenior = "Il prezzo scontato per i senior è:"

// CHIEDO ALL'UTENTE KM DA PERCORRERE E ETA' TRAMITE INPUT
const kmToTravel = document.getElementById("km");

const ageUser = document.getElementById("age");

//CREO LISTA NOMI PER GENERARE NOME RANDOM QUANDO VADO A INVIARE I DATI
const nameArray = [
    "De Rosa Giuseppe",
    "Damiani Eleonora",
    "De Rosa Antonio Ciro",
    "Russo Teresa",
    "Cori Davide",
    "Magnasciutto Riccardo",
    "Cognigni Lorenzo",
    "Eleonora Pimpolari",
    "Eleonora Ferlicca",
    "Zannini Federico",
    "Conticchio Chiara",
    "Arbola Davide",
    "Falcone Francesco",
    "Federici Matteo",
];

//CREO VARIABILE PER NOME RANDOM CHE POI VADO A RICHIAMARE NEL DOCUMENT.GETELEMENTBYID
let nameFinal = nameArray[Math.floor(Math.random() * nameArray.length)];
console.log(nameFinal)

//CREO VARIABILE DATE DOVE RICHIAMO TRAMITE QUERY SELECTOR IL FORM
const date = document.querySelector("form");
//EVENT LISTENER SUBMIT CHE QUANDO PREMO SUL BOTTONE MI FA VEDERE I DATI
date.addEventListener("submit", function (eventIntercetted) {

    //Intercetto l'evento e quando clicco sul bottone la pagina non si refresha da sola e i dati mi rimangono in pagina
    eventIntercetted.preventDefault()

    console.log("quanti km fa?", kmToTravel.value);
    console.log("quanti anni ha?", ageUser.value);

    //CREO VARIABILE PER IL PREZZO DEL BIGLIETTO E LO FIXO A DUE NUMERI DOPO LA VIRGOLA CON TOFIXED
    const priceTicket = kmRate * kmToTravel.value
    priceTicketToFixed = priceTicket.toFixed();
    console.log(`Prezzo base del biglietto: ${priceTicketToFixed}`);

    //Se l'utente è minorenne
    if (ageUser.value < 18) {
        //CREO VARIABILE PER PREZZO SE L'UTENTE è MINORENNE E APPLICO SCONTO DEL 20%
        let priceJunior = (priceTicket * 0.8);
        priceJuniorToFixed = priceJunior.toFixed(2);
        console.log(`Prezzo Ticket con sconto per minorenni: ${priceJuniorToFixed}`);
        document.getElementById("result-junior").innerHTML = stringJunior + " " + priceJuniorToFixed + " " + "€";
    }
    //Se l'utente è senior
    else if (ageUser.value > 65) {
        //CREO VARIABILE PER PREZZO SE L'UTENTE HA PIù DI 65 ANNI E APPLICO SCONTO DEL 40%
        let priceSenior = (priceTicket * 0.6);
        priceSeniorToFixed = priceSenior.toFixed(2);
        console.log(`Prezzo Ticket con sconto per senior: ${priceSeniorToFixed}`);
        document.getElementById("result-senior").innerHTML = stringSenior + " " + priceSeniorToFixed + " " + "€";
    }

    //CREO COSTANTE PER IL NUMERO DEL POSTO CHE IN QUESTO CASO VA IN BASE AGLI ANNI DELL'UTENTE MOLTIPLICATO PER 1.2 E POI LO FIXO PER AVERE UN NUMERO SENZA VIRGOLE
    const numberPlace = ageUser.value * 1.2;
    numberPlaceToFixed = numberPlace.toFixed()

    //STAMPO IN PAGINA NEI VARI ID IL VALORE CHE MI SERVE
    document.getElementById("name-user").innerHTML = nameFinal;
    document.getElementById("result").innerHTML = string + " " + priceTicketToFixed + " " + "€";
    document.getElementById("number-place").innerHTML = `"Il suo posto è il n. ${numberPlaceToFixed}"`;
    document.getElementById("train-carriage").innerHTML = "La sua carrozza è la n. 13"
})




