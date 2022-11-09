// ------------------  Bruk av find-metoden     ----------- -- //
//  Vi har en tabell med dyr.                                  //                              
//  Vi lager en funksjon som tar inn en tekst, og returnerer   //
//  true viss teksten er "Ap2".                                //
//  Vi kan så gi denne funksjonen til find, for å sjekke om    //
//  Ape finnes i tabellen                                      //
// ----------------------------------------------------------- //


let dyrTabell = ["Hest", "Ku", "Ape"]

function checkIsApe(dyr) {
    if (dyr == "Ape") {
        return true
    }
    return false
}

const funnet = dyrTabell.find(checkIsApe)
console.log(funnet)



//Versjon 2:
let dyrTabell2 = ["Hest", "Ku", "Ape"]
let searchItem2 = "Ape"

function checkExist2(dyr) {
    if (dyr === searchItem) {
        return true
    }
    return false
}

const funnet2 = dyrTabell2.find(checkExist2)
console.log(funnet)