//Her skriver vi kode som kjører på klienten


let messageDiv = document.getElementById("messages")
let refreshBtn = document.getElementById("refreshBtn")

//refreshBtn.addEventListener("click", updateMessages)

async function updateMessages() {
    let response = await fetch("/getMessages")
    let data = await response.json()
    let innerHtml = ""
    for (const melding of data) {
        innerHtml += "<p>" + melding.brukernavn + ": " + melding.melding + "</p>"
    }
    messageDiv.innerHTML = innerHtml
    setTimeout(updateMessages, 1000)
}

updateMessages()
//Async -> Betyr at denne funksjonen kan ta en pause når den venter på noe
//         Når den venter, kan programmet gjøre andre ting imens

//Await -> Et sted der funksjonen tar pause, og gir beskjed når den er klar til å 
//         fortsette