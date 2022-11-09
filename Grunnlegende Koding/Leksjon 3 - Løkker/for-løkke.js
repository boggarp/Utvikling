//Eksempel på for-løkke, som gjør noe fem ganger
for (let teller = 0; teller < 5; teller = teller + 1) {
    console.log("Telleren er nå" , teller)
  }

//Eksempel på array, og utskrift av alle elementer med en for-løkke
let dyr = ["Hest", "Ku", "Hjort"]
for (let teller = 0; teller < dyr.length; teller = teller + 1) {
    console.log(dyr[teller])
  }