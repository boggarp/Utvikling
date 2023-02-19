//   ---------   README      ------------     //

// Kjør følgende kommando for å få alle pakkene-du trenger:
// npm install


//   ---------   Fremgangsmåte Deploy to Azure      ------------     //

A - Klargjøring av koden din 
B - Lag prosjekt på Azure Portal
C - Deploye fra Visual Studio
D - Få sqlite til å fungere

////////////////////////////////////////
//  A - Klargjøring av koden din     ///
////////////////////////////////////////

1 - Package.json må ha "main" satt til hovedfilen din,
    og inni "scripts" må "start" peke til hovedfilen din.
      package.json:
        "main": "app.js",
        "scripts": {
        "start" : "node app.js"
        },

2 - Når du starter Express, må den lytte til porten som ligger
    lagret i process.env.PORT. 
      app.js:
        app.listen(process.env.PORT || 3000,  () => {
        console.log('Server is up! Check http://localhost:3000');
        });

////////////////////////////////////////
//  B - Lag prosjekt på Azure Portal ///
////////////////////////////////////////

1 - Logg på Azure portal, https://portal.azure.com/

2 - Trykk Create a Resource

3 - Søk etter "Web App", trykk på Create

4 - Velg "Azure for Students" på Subscription, og velg en eksisterende eller lag en ny Resource Group

5 - Skriv inn navn på app, og set publish til Code.

6 - Under Runtime stack velger du Node 18 LTS.  OS settes til Linux, og Region til West Europe 
    (Ikke Norge, der "fantes" ikke gratis-alternativ.. Men bare sjekk..)

7 - Velg F1 som Linux Plan. Dobbeltsjekkt at dette valget er gratis.

8 - Trykkk Next gjennom resten av valgene. Trykk til slutt Creat


////////////////////////////////////////
//  C - Deploye fra Visual Studio    ///
////////////////////////////////////////


1 - Installer Azure App Service Extension for Visual Studio Code fra Visual Studio Marketplace 
    (Via Extensions i menyen til venstre). 
    https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice

2 - Åpne prosjektet ditt i Visual Studio Code.

3 - Koble Visual Studio Code til Azure ved å åpne Command Palette 
    (trykk på Ctrl + Shift + P eller Cmd + Shift + P), søk etter "Azure: Sign In" 
    og følg instruksjonene for å logge på kontoen din.

4 - Søk "Deploy to Web App" fra Command Palette. Følg instruksjonene i veiviseren for å velge prosjekt-mappen,
    abonnementet ditt, og deretter prosjektet du laget på forrige side.

5 - Last opp koden din ved å søke på "Deploy" i Command Pallete. 
    Dette vil automatisk laste opp koden din til Azure App Service og starte applikasjonen.


////////////////////////////////////////
//  D - Få sqlite til å fungere      ///
////////////////////////////////////////

1 - Bytt ut denne linjen her:
    const db = sqlite3('database.db', {verbose: console.log}) //Tilkobling til databasen

   Med disse linjene her:
    const db = loadDbToMemory('database.db'); //Load database from file into memory
    saveDb('database.db', 30, true); //Enable automatic saving of database to file every 30 minutes (Wait 30 minutes before first save)

   Og legg inn disse funksjonene:

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

/**
 * 
 * @param {string} db_filename - en streng som representerer filnavnet for lagring av databasen.
 * @param {int} backupIntervalMinutes - et valgfritt tall som representerer tidsintervallet, i minutter,
 *                                    for funksjonen til å automatisk ta backup av databasen til fil.
 *                                    Standardverdien er 0.
 * @param {boolean} onlySchedule - en valgfri boolsk flagg som indikerer om man skal kun planlegge backup
 *                           av databasen eller faktisk lagre databasen til fil. Standardverdien er false.
 * @returns {boolean} indikerer om lagringsoperasjonen var vellykket eller ikke
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




