//Lag mappen Leksjon 8 - Objekter og klasser
//Lag filen app.js

//Vi skal lage et spill, der trenger vi innformasjon om forskjellige biler

//     ------ Variabler --------     //
//Vi kan lagre innformasjon om en bil slik:
let bilmerke = 'Porche';
let modell = '911';
let farge = 'svart';
let toppfart = 290;
let fart = 0;

//Å bare bruke variabler blir vanskelig om vi skal lagre innformasjon om flere biler,
//da blir det veldig mange variabler. Vi løser dette med å bruke objekter.

//     ------ Objekter --------     //
//Vi lager objekter, med objektvariabler inni
const bil = {
	bilmerke: 'Porche',
	modell: '911',
	farge: 'svart',
	toppfart: 290,
	fart: 0,
};
//Vi bruker objektvariablene slik:
//console.log(bil.bilmerke)

//     ------ Klasser --------     //
//   - Når vi skal lage flere like objekter (flere biler)
class Bil {
	constructor(bilmerke, modell, farge, toppfart, fart) {
		this.bilmerke = bilmerke;
		this.modell = modell;
		this.farge = farge;
		this.toppfart = toppfart;
		this.fart = fart;
	}

	gigass() {
		if (this.fart + 2 <= this.toppfart) {
			this.fart = this.fart + 2;
		}
	}

	presenter() {
		return `Denne bilen er en ${this.farge} ${this.bilmerke} ${this.modell} Toppfart:${this.toppfart} Gjeldende fart: ${this.fart}   `;
	}
}
//Funksjonen constructor er en slag funksjon som oppretter objekter.
//Men MERK at funksjoner som ligger inni en klasse, kalles metoder.

//Vi oppretter et objekt/en bil, ved hjelp av en klasse, slik:
const bilFraKlasse = new Bil('Porce', '911', 'svart', 290, 0);
//Når du bruker orde new, letes det opp en klasse som heter Bil, og
//konstruktøren inni denne blir kalt opp, med parameterene en gir.

//       -------  Metoder ------------- //
//Vi kan legge til en funksjon til en klasse,
//Denne funksjonen kan bare påkalles av klassen.
//Funksjonen kalles derfor en metode egentlig.
// -> Vi gjør dette på linje 40, under constructor metoden

//Vi kan nå lage et objekt med klassen, og deretter bruke metoden presenter
const bil3 = new Bil('Ford', 'F-150', 'rød', 230, 0);
bil3.gigass();
bil3.gigass();
bil3.gigass();
bil3.gigass();

let info = bil3.presenter();
console.log(info);

//Oppgave 1
//Endre presenter-metoden slik at denne også viser toppfart, og gjeldende fart.k

//Oppgave 2
//Legg til metoden giGass. Denne skal øke farten med 2km/h, men pass på
//at farten aldri går over maksfart.
//Lag denne metoden i klassen Bil

//resultat: Du skal kunne bruke metoden giGass, til å øke farten opp til 10km/h, og så
//bruke presenter til å vise at farten faktisk er så stor.

//Oppgave 3:
//Lag en metode for å redusere farten. Hva må du passe på ikke skal skje her?

//Oppgave 4
//Lag tre forskjelige objekter (biler) ved hjelp av klassen.
//Plasser disse i en liste/array, og skriv ut info om alle bilene ved hjelp av presenter..



//En klasse kan arve fra en annen klasse slik:
class Elbil extends Bil {
	constructor(
		bilmerke,
		modell,
		farge,
		toppfart,
		fart,
		batterikapasitet,
		batteristatus
	) {
		super(bilmerke, modell, farge, toppfart, fart);

		this.batterikapasitet = batterikapasitet;
		this.batteristatus = batteristatus;
	}

	presenter() {
		return `Denne bilen er en ${this.farge} ${this.bilmerke} ${this.modell} Toppfart:${this.toppfart} Gjeldende fart: ${this.fart}   Batterikapasitet: ${this.batterikapasitet}`;
	}
}

let elbilenMin = new Elbil('fdsfds', 'dasd', 'fdsds', 240, 0, 120, 60);

elbilenMin.gigass()


//Innhold er hentet fra NDLA, CC 4.0,
//Skrevet av Karl Arne Dalsaune 
//https://ndla.no/subject:5e53694a-c8eb-4871-8558-71523941c28e/topic:7342e935-c243-4277-8d07-d21ffa21b539/resource:72ba457e-c663-4779-a054-4737567a9300