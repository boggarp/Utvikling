//Skriv først npm install

const setup = require('./setup.js')
const app = setup.app
const db = setup.db
const upload = setup.upload

//Handler for å sende alle rader i tabellen melding, som json-data
app.get('/getMessages', (request,response) => {
    const sql = db.prepare("SELECT * FROM melding")
    const meldinger = sql.all()
    response.send(meldinger)
})

//Handler for html-skjema, og innsetting i tabellen melding
app.post('/insertMessage',  upload.single('image') , (request,response) => {
    const melding = request.body.melding
    const brukernavn = request.body.brukernavn
    const filename = request.file.originalname

    const sql = db.prepare('INSERT INTO melding (melding, brukernavn, img) VALUES (?, ?, ?)');
    sql.run(melding, brukernavn, filename);
    response.redirect('back')
})

//Starter opp applikasjonen
app.listen(3000, function() { 
    console.log("Server is up! Check http://localhost:3000")
})