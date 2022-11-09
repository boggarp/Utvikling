console.log("Hei!") //Skrive melding til console

// ---------   Variabler      --------- //
// ------------------------------------ //
var variabel = "Dette er en gammel type variabel" //Bare glem denne
let enNyVariabel = "Dette er en ny type variabel" //Hovedsaklig denne
const enKonstant = "Dette er en konstant, som ikke kan endres"

enKonstant = "Nytt innhold" //Denne gir en feilmelding
variabel = 'Denne kan man gi nytt "innhold"'
console.log(variabel) //Utskrift av verdien til en variabel

let tallVariabel = 1234
tallVariabel = 1234.34

// -----     Tabell / Array       ----- //
// ------------------------------------ //
let liste = [1, 2, 3, 4]
console.log(liste[3])
liste = ["Tekst", 2, 434n, [1,2,3,4]]
console.log(liste[3])


// ---------     Objekter       ------- //
// ------------------------------------ //
let person1 = {
    fornavn: "Børge",
    etternavn: "Garpestad"
}
let person2 = {
    fornavn: "Børge",
    etternavn: "Garpestad"
}
//Tabell med to objekter
let personer = [person1, person2]
//Utskrift av objektvariabel inni objektet person1, som ligger i tabellen personer
console.log(personer[0].fornavn) 



// ------   Boolen, (True/False)  ----- //
// ------       If / Else         ----- //
// ------------------------------------ //
let sant = true
sant = false

let pris = 10
let antall = 3

let svar = pris * antall
console.log(svar)

if (svar === 9) {
   // console.log("Vi gikk inn i denne kodeblokken")
} else if  ( svar === 3) {
  //  console.log("Nei, denne blokken")
} else {
   // console.log("Standardsvaret")
}

// ------        Funksjoner       ----- //
// ------------------------------------ //
function einFunksjon(fornavn, etternavn) {
    console.log("Hei", fornavn, etternavn)
}
einFunksjon("Børge", "Garpestads")

function kulFunksjon(navn) {
    console.log(navn, "er kul")
}
kulFunksjon("Børge")

// ---------     Oppgave 1      ------- //
// ------------------------------------ //
// Lag flasketuten peker på program
// Du skal lage tre objekter, som hver har lagret verdi om mat du må spise, og aktivitet
// du må gjøre.
// Plasser objektene i en tabell, og lag kode som plukker villkårlig en av objektene
// i tabellen.



// ---------     Oppgave 2      ------- //
// ------------------------------------ //
//Bruk funksjonen kulFunksjon til å skrive ut at du er kul 4569 ganger. 
//Bruk en for-løkke. (Google for hjelp)