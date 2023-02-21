const sqlite3 = require('better-sqlite3')
const db = sqlite3('database.db', {verbose:console.log})

//Warning: This code deltes the table jokes.

db.exec('DROP TABLE IF EXISTS jokes');

db.exec(`
    CREATE TABLE jokes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        joke TEXT NOT NULL,
        stars INTEGER
    )
    `);


const insertJokeStmt = db.prepare('INSERT INTO jokes (joke, stars) VALUES (?, ?)');

const jokes = [
  { joke: 'Why did the tomato turn red? Because it saw the salad dressing!', stars: 4 },
  { joke: 'Why did the chicken cross the playground? To get to the other slide!', stars: 2 },
  { joke: 'What do you call a fake noodle? An impasta!', stars: 5 },
  { joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!', stars: 3 },
  { joke: 'Why don’t scientists trust atoms? Because they make up everything!', stars: 1 },
  { joke: 'Alle barna kikket ut fra skyskraperen untatt Inger, hun trodde hun hadde vinger.', stars: 2 },
  { joke: 'Alle barna kastet snøball på læreren unntatt Svein, han kastet stein', stars: 5 },
  { joke: 'En eldre mann ble stoppet i en politikontroll ... Få se førerkortet ditt. Nei, nå får du jammen gi deg, konstabel, det tok du jo i forrige uke. Hvor mange tror du jeg har?', stars: 3 },
  { joke: "I'm reading a book on the history of glue. I just can't seem to put it down.", stars: 3 },
  { joke: "Why can't you hear a pterodactyl go to the bathroom? Because the pee is silent.", stars: 2 },
  { joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.", stars: 4 },
  { joke: "I used to play piano by ear but now I use my hands.", stars: 5 },
  { joke: "Why don't scientists trust atoms? Because they make up everything!", stars: 1 },
  { joke: "I'm on a whiskey diet. I've lost three days already.", stars: 2 },
  { joke: "Why did the scarecrow win an award? Because he was outstanding in his field!", stars: 3 },
  { joke: "I'm trying to organize a hide and seek tournament. Good players are hard to find.", stars: 4 },
  { joke: "I'm reading a book about anti-gravity. It's impossible to put down.", stars: 5 },
  { joke: "I used to be indecisive. Now I'm not sure.", stars: 3 },
  { joke: "Why don't oysters give to charity? Because they're shellfish.", stars: 2 },
  { joke: "I can't believe I got fired from the calendar factory. All I did was take a day off!", stars: 1 },
  { joke: "Why did the tomato turn red? Because it saw the salad dressing!", stars: 4 },
  { joke: "What do you call a fake noodle? An impasta!", stars: 5 },
  { joke: "Why did the chicken cross the playground? To get to the other slide!", stars: 2 },
  { joke: "Why couldn't the bicycle stand up by itself? Because it was two-tired!", stars: 3 },
  { joke: "Why did the math book look sad? Because it had too many problems.", stars: 4 },
  { joke: "Why did the coffee file a police report? It got mugged.", stars: 5 },
  { joke: "Why did the student eat his homework? Because the teacher told him it was a piece of cake.", stars: 2 },
  { joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.", stars: 4 },
  { joke: "Why do cows have hooves instead of feet? Because they lactose.", stars: 1 },
  { joke: "I'm reading a book about teleportation. It's bound to take me places.", stars: 3 },
  { joke: "I was wondering why the ball kept getting bigger. Then it hit me.", stars: 2 },
  { joke: "Why couldn't the bicycle stand up by itself? Because it was two-tired!", stars: 3 },
  { joke: "Why did the scarecrow win an award? Because he was outstanding in his field!", stars: 3 },
  { joke: "Why did the cookie go to the doctor? Because it was feeling crumbly.", stars: 1 }
];

db.transaction(() => {
  for (const joke of jokes) {
    insertJokeStmt.run(joke.joke, joke.stars);
  }
})();

function tableExists(tableName) {
	try {
		db.prepare(`SELECT 1 FROM ${tableName} LIMIT 1;`).get();
		return true;
	} catch (error) {
		return false;
	}
}