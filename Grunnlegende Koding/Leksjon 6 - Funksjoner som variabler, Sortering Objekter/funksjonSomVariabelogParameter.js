// ------------------      Funksjon som parameter    ---------------- //
//  Vi ser på hvordan en funksjon kan sendes inn i en annen funksjon  //
// ------------------------------------------------------------------ //


//Lager en funksjon og kjører denne normalt
let printYes = function () {
    console.log("Yes")
}
console.log("Kjører funksjon lagret i printYes en gang:")
printYes()


//Lager en funksjon, som kan motta en funksjon, og kjøre denne to ganger
let runTwice = function(functionToRunTwice) {
    functionToRunTwice()
    functionToRunTwice()
}

//Kjører funksjonen, som kjører en annen funksjon to ganger
console.log("Kjører funksjon lagret i printYes to ganger:")
runTwice(printYes)