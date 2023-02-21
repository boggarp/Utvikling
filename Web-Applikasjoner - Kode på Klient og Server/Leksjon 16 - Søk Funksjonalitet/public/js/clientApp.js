const resultsDiv = document.getElementById("resultsDiv")
const searchField = document.getElementById("searchField")
searchField.addEventListener("input", async (e) => {
    const value = e.target.value;
    let result = await fetch("/search?value="+value, {method:'get'})
    let resultData = await result.json()
    
    if(result.ok) {
        console.log("Result OK")
        let innerHTML = ""
        for (let row of resultData) {
          innerHTML += "<div class='joke'>" + row.joke + "</div>"
        }
        resultsDiv.innerHTML = innerHTML

    } else {
        console.log("Result NOT OK")
    }
})
