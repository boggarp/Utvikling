const setup = require('./setup.js')
const app = setup.app


let usernames = ["peder", "rolf", "hans"];
//Handler for registrering av bruker
app.post('/register', (request,response) => {
    console.log(request.body)
    let actionSuccessful = true
    //Mangler brukernavn/passord
    if (request.body.username == "" || request.body.password == "") {
        return response.send("<p>Missing Username and Password</p>");
    }
    //Brukernavn allerede tatt
    if (usernames.includes(request.body.username)) {
        return response.send("<p>Username is taken</p>");
    } 
    //Ingen problemer funnet
    usernames.push(request.body.username) 
    return response.send("<p>Sucess</p>");
})

//Starter opp applikasjonen
app.listen(3000, function() { 
    console.log("Server is up! Check http://localhost:3000")
})