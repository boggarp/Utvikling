const setup = require('./setup.js');
const app = setup.app;
const db = setup.db;

//Handler fremsiden
app.get('', (request, response) => {
    if (request.session.logedIn !== true) {
        response.redirect("/loginForm.html")
		return
	}

	response.render('index.hbs');
});

//Handler about-siden
app.get('/about', (request, response) => {
    if ( request.session.logedIn !== true) {
        response.redirect("/loginForm.html")
        return
    } 
	    response.render('about.hbs');
});

//Handler for html-skjema med action /sendInn og method post
app.post('/login', (request, response) => {
	const mypassword = '123';
	const myusername = 'birger';

	if (
		request.body.username == myusername &&
		request.body.password == mypassword
	) {
		request.session.logedIn = true;
		response.redirect('/');
	} else {
		request.session.logedIn = false;
		response.redirect('/loginForm.html');
	}
});

//Starter opp applikasjonen
app.listen(3000, function () {
	console.log('Server is up! Check http://localhost:3000');
});
