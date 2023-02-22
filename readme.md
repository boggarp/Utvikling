# ITK Utvikling

## Linker:
- [Hefte](https://indd.adobe.com/view/7dae25a9-1aee-44c6-8a86-8362b30588b3)
- [Utganspunkt Express Applikasjon](https://github.com/boggarp/Express-Handlebars---Utganspunkt-v2)

# CheatSheet

## npm

``` 
//Opprette nødvendige konfigurasjonsfiler ved oppstart nytt prosjekt  
npm init -y 

//Installere Express, Handlebars og better-sqlite3 
npm install express, hbs, better-sqlite3

//Installere nodemon globalt
npm install nodemon -g  

//Autorestarter app.js ved filendringer på filtypen js og hbs
nodemon app.js -e js,hbs 

//Installerer alle pakkene som hører til et prosjekt
npm install 
```

## Express


### Handler som repsonderer med rendret hbs fil    
```
app.get('/about', (request, response) => {
     response.render(about.hbs", {data: ["A","B"])
})
```

### HTML-form input
```
app.post('/insertPerson (request,response) => {
    console.log(request.body)
})
```
### Query String input, /insert?id=2&name=Hans
```
app.get('/insert (request,response) => {
    console.log(request.query.id)
    console.log(request.query.name)
})
```

## Handlebars
### Skrive ut en variabel med navnet title
```
{{title}}
```
### Skrive ut alle elementer i tabellen data, der elementene er objekter med objektvariabel name
```
{{#each data}}
    <p>{{this.name}} </p>
{{/each}}
```

## better-sqlite3

```
// All
const sql = db.prepare('SELECT * FROM names')
const rows = sql.all()
```
```
// One Specific
const sql = db.prepare('SELECT * FROM names WHERE id = (?)')
const result = sql.get(1) 
```
```
// Insert
const sql = db.prepare('INSERT INTO names (first,last) VALUES (?,?)');
const info = sql.run("Birger","Hansen")
```
```
// Delete
const sql = db.prepare("DELETE FROM names WHERE id=(?)");
const info = sql.run("7")
```
```
// Update
const sql = db.prepare(`
	UPDATE names 
	SET name=(?) 
	WHERE id=(?)`);
const info = sql.run("Spiderman",8)
```
```
// Inner Join
    SELECT * 
    FROM person 
    INNER JOIN poststed
    ON person.postnummer = poststed.postnummer 
    WHERE person_id=(?)

```

## Express-session

### Oppsett
```
app.use(session( {
    secret: "Lang_tekst_som_skal_være_hemmelig",
    resave: false,
    saveUninitialized : false
}))
```
### Objektvariabler kan lagres i request.session
```
request.session.username = username
request.session.logedIn = true
request.session.shoppingcart = []
```


## bcrypt

### Lage hash av passordet "qwerty", saltrounds satt til 10
```
const hash = bcrypt.hashSync("qwerty", 10);
```
### Sjekke om passordet "QwertY" samsvarer med hashen gitt QwertY blir hashet, viss hashen er lik returneres true, ellers false
```
const result = bcrypt.compareSync(password2, hash);
```
