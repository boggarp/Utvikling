const setup = require('./setup.js')
const app = setup.app
const db = setup.db

//Handler fremsiden
app.get('', (request,response) => {
    const sql = db.prepare("SELECT * FROM jokes")
    const jokes = sql.all()

    response.render("index.hbs", {
        jokes: jokes, 
    })
})

//Starter opp applikasjonen
app.listen(3000, function() { 
    console.log("Server is up! Check http://localhost:3000")
})