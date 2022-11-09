//Tabell for lagring av alle karrakterene
let grades = []

/**
 * Legger til en karrakter i karrakteroversikten
 * @param {number} grade En tallkarrakter. Skal være mellom 
 * 1 og 6. IV ikke støttet.
 */
function addGrade(grade) {
    grades.push(grade)
}

/**
 * Skriver ut alle karrakterene til console
 */
function viewGrades() {
    for (let i=0;i<grades.length;i++) {
        console.log(grades[i])
    }
}

export {addGrade,viewGrades}

