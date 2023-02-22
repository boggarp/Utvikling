# Om Azure Web Apps
- Gratis måte å deploye blant annet node applikasjon til Azure (opptil 10 apper, 1GB disk hver)
- Deploy ved hjelp av utvidelse i Visual Studio Code. 
- 60 CPU minuter pr. dag
- Applikasjonen stoppes automatisk viss den ikke får forespørsler, men starter igjen automatisk når man besøker nettsiden. (men det kan ta opp mot 1 minutt++), Kanskje det kan settes opp en liten hack for at det ikke skal skje... uptimerobot.com?

# Fremgangsmåte - Deploy Gratis til Azure

[A - Klargjøring av koden din](#a---klargjøring-av-koden-din)  
[B - Lag prosjekt på Azure Portal](#B---lag-prosjekt-på-azure-portal)  
[C - Deploye fra Visual Studio](#c---deploye-fra-visual-studio)  
[D - Få sqlite til å fungere](#d---få-sqlite-til-å-fungere)


## A - Klargjøring av koden din

1. Package.json må ha "main" satt til hovedfilen din, og inni "scripts" må "start" peke til hovedfilen din.

#### package.json:
```
"main": "app.js",
"scripts": {
"start" : "node app.js"
},
```

2. Når du starter Express, må den lytte til porten som ligger lagret i process.env.PORT. 
#### app.js:
```
app.listen(process.env.PORT || 3000,  () => {
console.log('Server is up! Check http://localhost:3000');
});
```


##  B - Lag prosjekt på Azure Portal

1. Logg på Azure portal på https://portal.azure.com/

2. Trykk Create a Resource

3. Søk etter "Web App", trykk på Create

4. Velg "Azure for Students" på Subscription, og velg en eksisterende eller lag en ny Resource Group

5. Skriv inn navn på app, og velg "Code" som publish-metode.
(Ikke Norge, der "fantes" ikke gratis-alternativ.. Men bare sjekk..)

7. Velg F1 som Linux Plan og sjekk at dette er gratis.

8. Trykkk Next gjennom resten av valgene. Trykk til slutt Creat



## C - Deploye fra Visual Studio   

1. Installer Azure App Service Extension for Visual Studio Code fra Visual Studio Marketplace 
(Via Extensions i menyen til venstre). 
https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice


2. Åpne prosjektet ditt i Visual Studio Code.

3. Koble Visual Studio Code til Azure ved å åpne Command Palette (trykk på Ctrl + Shift + P eller Cmd + Shift + P), søk etter "Azure: Sign In" og følg instruksjonene for å logge på kontoen din.

4. Fra Command Pallete, søk etter "Deploy to Web App". Følg instruksjonene i veiviseren for å velge prosjekt-mappen, abonnementet ditt, og deretter prosjektet du oppprettet på Azure Portal.

5. Last opp koden din ved å søke på "Deploy" i Command Pallete. Dette vil automatisk laste opp koden din til Azure App Service og starte applikasjonen.

Du finner logg for appen din ved å gå til:
https://APPLIKASJONSNAVN.scm.azurewebsites.net/

På portal.azure.com kan du klikke deg inn på appen dinfor å finne en mengde informasjon og valg. 

Hvis du får feilmelding når du laster opp prosjektet kan prøve følgende:
 - Gå inn på Azure Portal og stopp appen din
 - Slett mappen .vscode i prosjektmappen din



##  D - Få sqlite til å fungere     

### Alternativ 1:
Bruk dette utganspunktet: https://github.com/boggarp/Express-Handlebars---Utganspunkt-v2  
Det er konfigurert til å bruke databasen i "memory" mode når koden kjøres på azure.

### Alternativ 2:
Endre tilkoblingen til databasen i koden din ved å erstatte linjen:
```
const db = sqlite3('database.db', {verbose: console.log}) //Tilkobling til databasen
```

Med følgende to linjer:
```
const db = loadDbToMemory('database.db'); //Laster databasen fra fil inn i minnet
saveDb('database.db', 30, true); //Enable automatic saving of database to file every 30 minutes (Wait 30 minutes before first save)
```
Og legg inn disse funksjonene:

```
/**
 * Laster en SQLite-database fra en fil inn i minnet.
 * @param {string} db_filename - Navnet på SQLite-databasefilen som skal lastes.
 * @returns {object} Databasen som nå er i minnet.
 */
function loadDbToMemory(db_filename) {
	//Database
	const databaseStoragePath = path.join(__dirname, db_filename);

	console.log(`Loading database from file: ${databaseStoragePath}`);

	const fileDb = new sqlite3(databaseStoragePath);
	const buffer = fileDb.serialize();
	const db = new sqlite3(buffer, { verbose: console.log });
	fileDb.close();
	return db;
}
```

```

/**
 * Lagrer en database i minnet til en fil på disken. 
 * Hvis det er angitt, vil funksjonen også ta automatisk backup av databasen med en valgfri tidsintervall.
 *
 * @param {string} db_filename        - Filnavn for å lagre databasen
 * @param {int} backupIntervalMinutes - Tidsintervall i minutter for automatisk backup. 
 *                                      Standard er 0 (ingen backup).
 *                                      
 * @param {boolean} onlySchedule      - Hvis satt til true, vil funksjonen kun planlegge backup uten 
 *                                      å faktisk lagre databasen. Standard er false (lagrer databasen).
 * @returns {boolean}                 - Returnerer true hvis lagringen var vellykket, false ellers.
 */
function saveDb(db_filename, backupIntervalMinutes = 0, onlySchedule = false) {
	let IsSuccess = false;

	if (!onlySchedule) {
		console.log(`Saving in-memory database to file: ${db_filename}`);
		const databaseStoragePath = path.join(__dirname, db_filename);
		const buffer = db.serialize();
		try {
			fs.writeFileSync(databaseStoragePath, buffer);
			console.log(`Database written to: ${db_filename}`);
			IsSuccess = true;
		} catch (err) {
			console.error(err);
			IsSuccess = false;
		}
	}
	if (backupIntervalMinutes > 0)
		setTimeout(
			() => saveDb(db_filename, backupIntervalMinutes),
			backupIntervalMinutes * 60 * 1000
		);
	return IsSuccess;
}
```




