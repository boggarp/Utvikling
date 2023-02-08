//Hente knappen "clickme" fra DOM
let btn_changeColor = document.getElementById("btn_changeColor")
btn_changeColor.addEventListener("click", function () {
    let colorchangerBox = document.getElementById("colorchanger")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorchangerBox.style.backgroundColor = "#"+randomColor
})

//Oppgave
// - Endre fargen på boksen under ved klikk
// - Få knappen til å gi random farge på boksen
// - Vis rgb-verdiene til fargen som lages
// - Lag en switch som veksler mellom at knappen skifter mellom 
//   to farger, og gir random farge. (Gjør eksempel 2 oppgaver først)


//Eksempel 2 - Innskrivingsfelt
let btn_submit = document.getElementById("btn_submit")
btn_submit.addEventListener("click", function () {
    let inp_fname = document.getElementById("inp_fname")//Hent input-boksen
    let name = inp_fname.value//Hent verdien i input-boksen

    //Vis denne verdien i en annen boks
    let txt_result = document.getElementById("txt_result")
    txt_result.innerText = "Hello " + name //innerText mer "sikker" en "innerHTML"
})

//Oppgaver:
// - Lag en Reset knapp. (Fjerner innholde i begge de hvite rutene)
// - La en spesiell beskjed komme opp, dersom en trykker på knappen uten å 
//   skrive inn navn.
// - Lag en spesiell hilsen, dersom en skriver inn et spesielt navn.
