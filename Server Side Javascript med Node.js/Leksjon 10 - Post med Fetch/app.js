const setup = require('./setup.js')
const app = setup.app


let usernames = ["peder", "rolf", "hans"]
//Handler for registrering av bruker
app.post('/register', (request,response) => {
    console.log(request.body)
    let actionSuccessful = true
    //Mangler brukernavn/passord
    if (request.body.username == "" || request.body.password == "") {
        return response.status(400).json({ message: 'Missing username/Password' });
    }
    //Brukernavn allerede tatt
    if (usernames.includes(request.body.username)) {
        return response.status(400).json({ message: 'Username is taken' });
    } 
    //Ingen problemer funnet
    usernames.push(request.body.username) 
    return response.status(200).json({ message: 'Success' });
})

//Starter opp applikasjonen
app.listen(3000, function() { 
    console.log("Server is up! Check http://localhost:3000")
})