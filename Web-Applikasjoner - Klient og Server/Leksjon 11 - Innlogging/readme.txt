//   ---------                        README               ------------     //


//   ---------           Innlogging     ------------     //
Innlogging gjøres ved hjelp av module express-session.
Denne modulen sørger for at en cookie blir lagret hos brukeren, slik
at brukeren gjenkjennes ved neste besøk.

Innlogging skjer ved html-skjema i filen /public/loginForm.html

Handler for skjemaet ligger i app.js. Viss passord er korrekt, settes en variabel
tilknyttet den aktive brukeren til true. (request.session.logedIn)

Handler for fremsiden og siden about sjekker om denne variabelen er korrekt, før 
sidene returneres til brukeren.


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

