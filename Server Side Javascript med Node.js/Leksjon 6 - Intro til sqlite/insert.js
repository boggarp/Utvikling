const sqlite3 = require('better-sqlite3')
const db = sqlite3('database.db');

//Inserting 
console.log("Inserting:")
const sql = db.prepare('INSERT INTO names (name) VALUES (?)');

const info = sql.run("Birger")

console.log("Amount changes done: " + info.changes)
console.log("lastInsertRowID: " + info.lastInsertRowid)