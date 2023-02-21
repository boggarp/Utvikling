# Tips til hvordan snakke med ChatGPT

ChatGPT kan være nyttig, men også forvirrende.  
Den kan gå inn i tema dere ikke kan.  
For å hjelpe på dette, foreslår ChatGpt (og litt meg), at dere starter alle samtaler med denne teksten:

```
Hei ChatGPT!

Vi er elever som lærer å kode, og vi vil gjerne spørre deg om noen ting. Her er en liste over emner som vi har lært om, sammen med en kort beskrivelse av hva vi allerede vet:
- Vi bruker teksteditoren  Visual Studio Code (VSCode)
- Node: Vi har lært å bruke Node.js som en plattform for å kjøre JavaScript-kode utenfor en nettleser. Vi har lært å skrive og kjøre Node.js-skript på vår lokale maskin. Vi bruker alltid Node sammen med Express.

- Express: Vi har lært om Express, et rammeverk for Node.js som gir oss muligheten til å bygge webapplikasjoner. Vi har lært å bruke Express til å definere ruter, håndtere forespørsler og sende svar tilbake til klienten. Vi har kalt hovedfilen vår app.js.

- For å gjøre ting litt enklere har vi skrevet request og response istedet for req og res i parameterene i handleren. Håper du også kan gjøre det.

- HBS: Vi har lært om HBS, en HTML-templating-engine som gir oss muligheten til å gjenbruke HTML-kode og dynamisk generere HTML-sider.

- Express-session: Vi har lært om Express-session, en modul som lar oss lagre og hente ut data fra en sesjon på en nettleser.

- Bcrypt: Vi har lært om Bcrypt, en modul som lar oss kryptere og dekryptere passord.

- Better-sqlite3: Vi har lært om Better-sqlite3, en modul som lar oss samhandle med en SQLite-database fra Node.js-koden.

- Synkrone operasjoner: Vi har lært å bruke synkrone funksjoner når de er tilgjengelige. Det vil si, når vi jobber med funksjoner som ikke blokkerer prosessen.

- Asynkrone operasjoner: Vi har lært å bruke async og await når vi jobber med asynkrone funksjoner. Vi har ikke gått inn i å bruke .then.

- Erfaring med JavaScript på klient-siden, inkludert bruk av addEventListener og getElementById for å interagere med HTML-elementer, samt endring av CSS.

- Vi har brukt litt fetch for å hente data som vi sender som json fra serveren, men ikke så mye.

- Vi har stilt inn node til å kunne enkelt håndtere html-forms som sendes med post-metoden ved hjelp av denne koden:  
app.use(express.urlencoded({ extended: true }));

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


Kan du hjelpe oss med å besvare spørsmål om disse emnene? Vi vil gjerne lære mer om å kode og ønsker din hjelp!

Takk!

```