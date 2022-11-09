// ------------------   Sortering av objekter           --------- //
//    Vi lager en tabell bestående av tre objekter.               //
//    Vi lager så en funksjon som kan finne ut hvilket objekt,    //
//    av to objekter som skal komme først. Denne funksjonen gir   //
//    vi til sort funksjonen                                      //
// -------------------------------------------------------------- //


let pers1 = {
    firstname: "Børge",
    lastName: "Garpestad", 
    age: 97
}

let pers2 = {
    firstname: "Hans",
    lastName: "Hansen", 
    age: 56
}

let pers3 = {
    firstname: "Apen",
    lastName: "Apensen", 
    age: 56
}

let personer = [pers1, pers2, pers3]

/**
 * Funksjon for å finne hvilket av to personer-objekt som
 * kommer først alfabetisk når en sorterer på objekt-variabelen "lastName"
 * @param {string} first Person objekt 1
 * @param {string} second Person objekt 2
 * @returns 
 */
function sortLastName (first, second) {
    const firstLastName = first.lastName.toLowerCase()
    const secondLastName = second.lastName.toLowerCase()
    if (firstLastName < secondLastName) {
        return -1
    } else if (firstLastName > secondLastName) {
       return 1
    } else {
        return 0
    }  
}

console.log("Before sorting:")
console.log(personer)

console.log("Afther sorting:")
personer.sort(sortLastName)
console.log(personer)

