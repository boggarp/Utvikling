// ------------------  Bruk av for-løkke for å søke ------- -- //
//  Vi har en tabell med to "person-objekter"                  //                              
//  Vi leter etter et objekt  med objektvariabelen fornavn lik //
//  "Birger"                                                   //
// ----------------------------------------------------------- //



//To objekter, som legges inn i en tabell
let person1 = {
    fornavn: "Hans",
    etternavn: "Hansen"
}
let person2 = {
    fornavn: "Birger",
    etternavn: "Birgersen"
}
let personer = [person1,person2]

//Sjekke om det finnes en som heter Birger. 
//Skriv ut til console viss det gjør det
const searchItem = "Birger"
for(let i=0;i<personer.length;i++) {
    if (personer[i].fornavn === searchItem) {
        console.log("Funnet,", personer[i].fornavn, personer[i].etternavn)
    }
}