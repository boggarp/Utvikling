//npm init -y
//npm install bcrypt
const bcrypt = require('bcrypt');

let saltRounds = 20//Høyere tall blir sikrere og tregere..
let password1 = "birger123" 

//Case: En bruker har sendt inn brukernavn hans, og passord biger123
//Dette skal lagres i databasen. Passordet skal lagres som en hash

// Metode 1 - Genererer salt, deretter hash
//const salt = bcrypt.genSaltSync(saltRounds)
//console.log("Salt: " + salt)
//const hash = bcrypt.hashSync(password1,salt) //Dette skal lagres sammen med brukernavn
//console.log("Hash: " + hash)

//Metode 2 - Generer salt og hash samtidig
const hash2 = bcrypt.hashSync(password1, saltRounds) //Dette skal lagres sammen med 
                                                     //brukernavn i databasen
console.log("hash: " + hash2)


////// Sammenligning
//Dette gjør vi når vi har fått inn et passord via post (html-skjema)
//når en bruker ønsker å logge inn.
//Vi slår da opp hashen, som hører til brukernavnet, og ser om
//passordet er korrekt.
let hashFraDatabase = hash2 //Later som vi henter hashen fra databasen
let password2 = "drikkcola"
let result = bcrypt.compareSync(password2,hashFraDatabase)
console.log("Er passordet korrekt: " + result)

//Oppgave
// Får du korrekt når du har to like passord?
// Hva skjer når du justerer saltrounds. (Opp/Ned)




//Oppsumert:

//Du trenger å lagre hashen, som du lager slik:
const hash3 = bcrypt.hashSync(password1, saltRounds) 

//Du sjekker om et passord er korrekt slik:
let result2 = bcrypt.compareSync(password2,hashFraDatabase)

