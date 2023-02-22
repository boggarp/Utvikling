# Tips til hvordan snakke med ChatGPT

ChatGPT kan være nyttig, men også forvirrende.  
Den kan gå inn i tema dere ikke kan.  
For å hjelpe på dette, foreslår ChatGpt (og litt meg), at dere starter alle samtaler med denne teksten:

```
Hei ChatGPT! (Kan du lese slutten først? altså: dette er bare til info, vi trenger ikke tips nå)

Jeg ønsker å stille deg spørsmål, men jeg vil ut at du skal finne svar innenfor det jeg kan.
Temaet er web applikasjoner med node.js og express.
Her er hvilke konvensjoner du skal følge i svarene:
- Jeg skal skrive kode i Visual Studio Code (VSCode)
- Svarene skal være relatert til kodespråket Javascript, SQL, HTML og CSS 
- Applikasjonene skal lages med Node, og skal alltid bruke modulen Express.

- Appens hovedfil skal være app.js. Her legger vi alle handlerene.

- Koden skal ikke bruker router (express.Router();)

- Alle forekomster av 'req' skal byttes med 'request', og 'res' skal byttes med 'response'

- Modulen hbs skal brukes for å gjøre server-side rendering

- Modulen express-session skal brukes for å gi cookies til brukeren, og for innlogging og annet som krever at brukeren huskes.

- Modulen Bcrypt skal brukes for å hashe passord. Du skal bare bruke de synkrone modulene i denne modulen. Ikke bruk funksjonen genSalt, bruk heller funksjonen genSaltSync. Ikke bruk funksjonen hash, bruk heller hashSync.

- Modulen better-sqlite3 skal brukes for å gi databasefunksjonalitet.
  når du lager statements med better-sqlite3 skal variabelen hete sql.

- For innput til node applikasjonen skal du bruke html-forms med post-metoden, eller query parameters . Du skal ikke bruke request-params som input metode.

- Vi har stilt inn node til å kunne enkelt håndtere html-forms som sendes med post-metoden ved hjelp av denne koden:  
app.use(express.urlencoded({ extended: true }));


- Når det finnes en synkron måte å gjøre ting på, så skal du velge denne metoden.

- Viss noe ikke kan gjøres synkront, så kan du bruke asynkrone opperasjoner. Du skal bruke async og await. Ikke bruk then.

- På klientsiden kan du bruke funksjoner addEventListener og getElementById for å interagere med HTML-elementer, samt endring av CSS.

- Du kan bruke fetch for å hente data som vi sender som json fra serveren til klient eller motsatt.
  Du skal ikke bruke XMLHttpRequest, bare bruk fetch.

- Vi har følgende mappestruktur
    - public: Mappen som skal være direkte tilgjengelig
    - views: Mappe som inneholder mappen views og partials 
        - pages: Undermappe til views. Denne inneholder alle dynamiske sider (de som skal serverside-rendres)
        - partials : Undermappe til views. Denne inneholder deler, som kan brukes igjen på flere av sidene i pages.

- Her er koden vi pleier å bruke når vi setter opp node-applikasjonen
const fs = require('fs')
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const session = require('express-session')

//Starter opp express, og skrur på public-mappen
const app = express()
const publicDirectoryPath = path.join(__dirname, "/public")
app.use(express.static(publicDirectoryPath))

//Bruker urlencoded-middleware, for å la oss få tilgang til request.body i post-forms
app.use(express.urlencoded({ extended: true }));

//Legger til Handlebars for å få til Server Side Rendering
const viewPath = path.join(__dirname, "/views/pages")
const partialsPath = path.join(__dirname, "/views/partials")
app.set("view engine", hbs)
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

//Sessions
//Bruker express-session til å lagre informasjon på server om besøkende
//som for eksempel-login-state
app.use(session( {
    secret: "LangTekstSomSkalHoldesHemmelig",
    resave: false,
    saveUninitialized : false
}))

//Database
const sqlite3 = require('better-sqlite3')
const db = sqlite3('database.db', {verbose:console.log})

Kan du hjelpe oss med å besvare spørsmål om disse emnene?
Jeg vil ikke at du svarer på noen spørsmål nå, jeg vil bare at du skal ha litt bakgrunnskunnskap når jeg fortsetter å stille
spørsmål. Kan du unngå å komme med forslag nå. Bare si at du vil gjerne svare meg. Jeg har et konkret spørsmål å stille forstår du.
Så ikke si noe, vent på at jeg stiller spørsmål. Du trenger heller ikke oppsummere det jeg har skrevet.

Takk!

```
