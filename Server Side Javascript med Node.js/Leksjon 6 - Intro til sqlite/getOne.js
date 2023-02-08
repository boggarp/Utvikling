const sqlite3 = require('better-sqlite3')
const db = sqlite3('database.db');

//Using get on a statement to get the first row corresponding to query
console.log("One with ID:")
const sql = db.prepare('SELECT * FROM names WHERE id = ?')
const firstResult = sql.get(1) 

console.log(firstResult)