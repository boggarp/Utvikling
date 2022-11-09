// ------------------      CallbackFunction   --------------------------------- //
//  - En funksjon som kjører når noe spesielt inntreffer (En event/hendelse)    //
//  Vi bruker setTimeout.                                                       //
// Hendelsen som inntreffer her er at tiden går ut (5 sekund)                   //
// ---------------------------------------------------------------------------- //


//Funksjon som sier gratulerer
function congrats(arg) {
    console.log("Congrats, you managed to wait 5 seconds!");
  }

//Vi sender funksjonen som sier gratulerer, inn i setTimeout funksjonen
setTimeout(congrats,5000);