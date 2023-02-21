## Generell Info
Kjør følgende kommando for å få alle pakkene-du trenger:
npm install


# Vitse-system
Systemet viser vitser lagret i databasen.
Der et mulig å trykke Update på en vits, da får en et skjema for å 
redigere vitsen.

![Screenshot](Screenshot2.png)

Hver vits skrives ut ved hjelp av handlebars, 
og hver vits har en link/knapp
som peker til /jokes/editForm?id=...


Når man trykker på edit, vil handleren til /jokes/editForm
hente raden som hører til id-en i databasen, og 
skrive denne dataen som default-verdier i et skjema.

Når bruker trykker Update, sendes skjemaet til 
handleren /jokes/edit. Her blir databasen oppdatert,
og brukeren sendes til fremsiden viss alt gikk korrekt.



## Mer Generell info:

I setup.js står kode som kjøres i starten av de fleste express prosjekt

app.js er hovedprogrammet. Start app.js med kommandoen node .\app.js

Installer node herfra:
https://nodejs.org/en/

Grafisk brukergrensesnitt til databasen (database.db):
https://sqlitestudio.pl/

Data-base-plugin til Visual Studio:
https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite