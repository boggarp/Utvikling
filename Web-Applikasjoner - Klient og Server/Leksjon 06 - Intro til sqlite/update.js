const sqlite3 = require('better-sqlite3')
const db = sqlite3('database.db');

//Inserting 
console.log("Updating:")
const statement = db.prepare("UPDATE names SET name=(?) WHERE id=(?)");
const info = statement.run("Spiderman",8)

console.log("Amount changes done: " + info.changes)
console.log("lastInsertRowID: " + info.lastInsertRowid)