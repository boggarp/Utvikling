const setup = require('./setup.js')
const app = setup.app
const db = setup.db

//Handler fremsiden
app.get('', (request,response) => {
    response.render("index.hbs")
})

//Handler for søk. Resultat sendes som json-data
app.get('/search', (request,response) => {
    const value = request.query.value
    if(!value) {
        response.status(400); //Set status off repsonse to 400 - Bad Request
        response.send('Missing query parameter id!');
        return
    }
    
    const sql = db.prepare("SELECT * FROM jokes WHERE joke LIKE (?)")
    const result = sql.all("%"+value+"%")
    response.send(result)
})



//Starter opp applikasjonen
app.listen(3000, function() { 
    console.log("Server is up! Check http://localhost:3000")
})