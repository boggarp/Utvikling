const sqlite3 = require('better-sqlite3')
const db = sqlite3('database.db');

//Using all on a statement to get the all rows corresponding to query
console.log("All:")
const sql = db.prepare('SELECT * FROM names')
const rows = sql.all()

for (const row of rows)
    console.log(row)
