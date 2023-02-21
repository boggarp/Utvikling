const sqlite3 = require('better-sqlite3')
const db = sqlite3('database.db', {verbose:console.log})

if (!tableExists('jokes')) {
    db.exec(`
    CREATE TABLE jokes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        joke TEXT NOT NULL,
        stars INTEGER
    )
    `);
  }

db.prepare('INSERT INTO jokes (joke,stars) VALUES (?,?)').run("Alle barna kikket ut fra skyskraperen untatt Inger, hun trodde hun hadde vinger.", "6")
db.prepare('INSERT INTO jokes (joke,stars) VALUES (?,?)').run("Alle barna kastet snøball på læreren unntatt Svein, han kastet stein", "6")
db.prepare('INSERT INTO jokes (joke,stars) VALUES (?,?)').run("En eldre mann ble stoppet i en politikontroll ... Få se førerkortet ditt. Nei, nå får du jammen gi deg, konstabel, det tok du jo i forrige uke. Hvor mange tror du jeg har?", "6")


function tableExists(tableName) {
	try {
		db.prepare(`SELECT 1 FROM ${tableName} LIMIT 1;`).get();
		return true;
	} catch (error) {
		return false;
	}
}