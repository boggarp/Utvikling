const setup = require('./setup.js');
const path = require('path');
const app = setup.app;
let db = setup.db;

//Handler fremsiden
app.get('', (request, response) => {
	const sql = db.prepare('SELECT * FROM poll');
	const cases = sql.all();

	response.render('index.hbs', { cases: cases });
	//response.render("index.hbs")
});

//Handler insert-siden
app.post('/poll/add', (request, response) => {
	const name = request.body.name;
	db.prepare('INSERT INTO poll (name) VALUES (?)').run(name);
	response.redirect('/');
});

//Handler for å slette alle radene i tabellen poll
app.delete('/poll/deleteAll', (request, response) => {
	db.prepare('DELETE FROM poll').run();
	response.redirect('/');
});

//Handler for å lagra databasen (som er i minne) til fil
app.get('/admin/saveDb', (request, response) => {
    const IsSuccess = setup.saveDb("database.db");
	return response.status(200).json({ IsSuccess: IsSuccess });
    
});

app.listen(process.env.PORT || 3000,  () => {
	console.log('Server is up! Check http://localhost:3000');
});
