const fs = require('fs');
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const sqlite3 = require('better-sqlite3');

//Starter opp express, og skrur på public-mappen
const app = express();
const publicDirectoryPath = path.join(__dirname, '/public');
app.use(express.static(publicDirectoryPath));

//Bruker urlencoded-middleware, for å la oss få tilgang til request.body i post-forms
app.use(express.urlencoded({ extended: true }));

//Legger til Handlebars for å få til Server Side Rendering
const viewPath = path.join(__dirname, '/views/pages');
const partialsPath = path.join(__dirname, '/views/partials');
app.set('view engine', hbs);
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

//Database
const db = loadDbToMemory('database.db'); //Load database from file into memory
saveDb('database.db', 30, true); //Enable automatic saving of database to file every 30 minutes (Wait 30 minutes before first save)

exports.saveDb = saveDb;
exports.app = app;
exports.db = db;

/////////////////////////////////////////////////////////////////////////////
///                                                                       ///
///                            Functions                                  ///
/////////////////////////////////////////////////////////////////////////////

/**
 * Laster en SQLite-database fra en fil inn i minnet.
 * @param {string} db_filename - Navnet på SQLite-databasefilen som skal lastes.
 * @returns {object} Databasen som nå er i minnet.
 */
function loadDbToMemory(db_filename) {
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
