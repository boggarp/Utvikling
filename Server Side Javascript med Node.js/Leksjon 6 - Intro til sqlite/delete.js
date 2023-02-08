const sqlite3 = require('better-sqlite3')
const db = sqlite3('database.db');

//Inserting 
console.log("Deleting:")
const sql = db.prepare("DELETE FROM names WHERE id=(?)");

const info = sql.run("7")

console.log("Amount changes done: " + info.changes)
console.log("lastInsertRowID: " + info.lastInsertRowid)