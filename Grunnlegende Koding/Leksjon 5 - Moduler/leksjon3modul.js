//En funksjon som skal brukes i filen leksjon2.js. 
//Jeg bruker JSDoc for å dokumentere funsjonen. Legg merke til syntaksen på linje 4 til 9.

/**
 * En funksjon som legger sammen to tall
 * @param {number} parameter1 Et tall
 * @param {number} parameter2 Enda ett tall
 * @returns {number} Summen av de to tallene
 */
 function leggSammen(parameter1, parameter2) {
    console.log(parameter1)
    console.log(parameter2)

    return  parameter1 + parameter2
}


/**
 * En funksjon som tar en tekststreng og returnerer tekststrengen med stor forstebokstav i alle ord.
 * @param {string} tekstStreng En tekststreng med ord skilt av med mellomrom
 * @returns {string} En streng hvor alle ord har stor forbokstav
 */
 function storForbokstav(tekstStreng) {
    let ordArray = tekstStreng.split(" ")
    let returnertOrd = "";

    for (let x = 0; x < ordArray.length; x++) {
        let ord = ordArray[x];

        let forsteBokstav = ord[0].toUpperCase();
        let resten = ord.substring(1, ord.length);
        let sattSammen = forsteBokstav + resten;

        if(x === 0) {
            returnertOrd = sattSammen
        } else {
            returnertOrd = returnertOrd + " " + sattSammen
        }        
    }

    return returnertOrd
}



// Her eksporterer jeg funksjonen over som storForbokstav og leggSammen. 
// Merk at jeg kunne gitt den nytt navn, f.eks exports.Capitalizer = storForbokstav 
exports.leggSammen = leggSammen;
exports.storForbokstav = storForbokstav;