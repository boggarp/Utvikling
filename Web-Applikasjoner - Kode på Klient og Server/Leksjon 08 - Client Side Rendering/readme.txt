//   ---------                        README               ------------     //


//   ---------           Klient side rendering     ------------     //
Vi vil vise innholdet i en database på en nettside.

Vi lager en handler i app.js som sender selve dataen som json

I klient-koden (/public/js/app.js) som er koblet til /public/index.html bruker
vi fetch til å hente dataen, og javascript kode for å manipulere dom, slik at dataen vises.


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

