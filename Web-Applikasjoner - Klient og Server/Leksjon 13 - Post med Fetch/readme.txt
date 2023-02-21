//   ---------                        README               ------------     //


//   ---------           Info Post med Fetch     ------------     //
Eksempelet går ut på brukerregistrering. Brukernavn og passord skal registreres i en database, og
når en prøver å bruke et brukernavn som er opptatt, så skal en få forklarende. feilmelding.
Her trenger vi kommunikasjon med serveren, for det er serveren som vet om brukernavnet er opptatt.
Vi bruker derfor funksjonen fetch, til å sende en forespørsel, og når vi får svaret, kan vi 
endre DOM, slik at feilmeldingen vises for brukeren. Alt uten at siden må refreshe.

Vi kan sende post-meldinger til express-applikasjonen vår med et enkelt html-skjema:
<form id="registerForm" action="/register">
        <input type="text" name="brukernavn">
        <input type="text" name="passord">
        <button>Registrer</button>
</form>

I dette eksempelet ønsker vi å sjekke verdiene med javascript-kode, gi tilbakemelding om de er feil, 
og bare sende de til serveren når de er godkjent.

Dette kan vi gjøre ved å skru av "standard" handlingen når en klikker på knappen i skjemaet,
og heller skrive egen kode for dette. 
Sentralt da blir å sende post-requestet med funksjonen fetch.

Skjema, Koden for å sjekke inputen, gi tilbakemelding, og sende post-requestet med fetch ligger i filen /public/index.html. 

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

