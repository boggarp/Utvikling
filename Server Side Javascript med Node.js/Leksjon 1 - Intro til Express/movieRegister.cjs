// Modul for å lagre filmer, og hente de ut igjen.
// Fra oblig 1

let insertCounter = 0
let movies = []

function insertMovie(title, lengthMin, rating) {
    let movie = {
        title : title,
        lengthMin : lengthMin,
        rating : rating
    }
    movies.push(movie)
    insertCounter++
}

function printMovies() {
    for (let i=0; i<movies.length;i++) {
        console.log("Film", i+1, ":", movies[i].title+",", movies[i].lengthMin,"min, rating", movies[i].rating)
    }
    console.log("Amount movies stored in system:", movies.length)
    console.log("Amount movies ever entered into system:", insertCounter)
}

function getMovies() {
    return movies
}

exports.insertMovie = insertMovie
exports.printMovies = printMovies
exports.getMovies = getMovies