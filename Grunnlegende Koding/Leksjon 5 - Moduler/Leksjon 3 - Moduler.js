/* I denne leksjonen skal vi se på tre ting
1) Moduler, eksport og import
2) Dokumentasjon av funksjoner
3) Stringmetoder
*/

// Her importerer jeg exportene fra filen leksjon2moduler.js. Disse blir liggende som metoder i et objekt som heter funksjoner.
const funksjoner = require("./leksjon3modul.js") 


// Et eksempel på at jeg bruker den importerte funksjonen. Legg merke til at jeg skriver funksjoner.funksjonsnavn.
let tall1 = 5
let tall2 = 7
let resultat = funksjoner.leggSammen(tall1,tall2)
console.log(resultat)




// Et eksempel på at jeg bruker den importerte funksjonen. Legg merke til at jeg skriver funksjoner.funksjonsnavn.
console.log(funksjoner.storForbokstav("store Moskusokser og andre buskevekster")) 




/*
1) Les denne siden: https://www.w3schools.com/js/js_string_methods.asp
2) Gjør disse oppgavene: https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_string_methods1
3) Utvid funksjonen i leksjon2moduler, slik at den ikke gjør om "of", "for", "the", "and" og "a" til ord med stor forbokstav.
4) Skriv en funksjon som tar en lengre tekst, og gjør om alle tegn til små bokstaver. Dokumenter funksjonen din med jsdoc, og eksporter den som modul.
5) Se for deg at du skal ta i mot et tall fra brukeren av en nettside. Brukeren kan skrive inn tallet i en tekstboks og bruke desimaltall. Inputten blir levert som string. Skriv en funksjon som tar i mot stringen og renser denne for vanlige feil som kan oppstå. F.eks kan det hende at brukeren har lagt inn mellomrom for å skille mellom nullene i et stort tall (eks 1 000 000 for en million), eller brukt komma i stedet for punktum for å markere desimaltall. Du kan velge om funksjonen returnerer en fikset string, eller om den gjør om stringen til number og returnerer dette.  Dokumenter og eksporter funksjonen.
*/