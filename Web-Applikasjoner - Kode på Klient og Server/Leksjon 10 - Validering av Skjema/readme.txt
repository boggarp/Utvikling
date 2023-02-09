//   ---------                        README               ------------     //


//   ---------           Validering av Skjema/Form med Javascript     ------------     //
Eksempelet går ut på brukerregistrering. Brukernavn og passord skal registreres i en database, og
når en ikke skriver passordet likt to ganger skal en få opp en feilmelding.

Vi lager  et enkelt skjema i /public/index.html

I <script> tag i /public/index.html legger vi til en egen funksjon som trigges når skjemaet skal til 
å sendes inn. Viss dataen i skjemaet er ugyldig stoppes det fra å sendes inn, viss det er gyldig sendes
det inn som vanlig.

Handler for skjemaet ligger i app.js. Handleren sørger også for å returnere relevante feilmeldinger.
Vi bruker en enkel tabell for lagring av brukernavnene.
I en fullverdig applikasjon hadde en for eksempel brukt en database.



// --------------------Generell Info--------------------- //
Kjør følgende kommando for å få alle pakkene-du trenger:
npm install

I setup.js står kode som kjøres i starten av de fleste express prosjekt

app.js er hovedprogrammet. Start app.js med kommandoen node .\app.js

Installer node herfra:
https://nodejs.org/en/

Grafisk brukergrensesnitt til databasen (database.db):
https://sqlitestudio.pl/

Data-base-plugin til Visual Studio:
https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite

