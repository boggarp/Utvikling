

const deleteBtn = document.getElementById("deleteBtn")
deleteBtn.addEventListener("click", async () => {
    let response = await fetch("/poll/deleteAll", {method:'DELETE'})
    if (response.redirected)
        window.location.href = response.url
})

const saveDbBtn = document.getElementById("saveDbBtn")

saveDbBtn.addEventListener("click", async () => {
    let response = await fetch("/admin/saveDb", {method:'GET'}) 
    let data = await response.json()
    console.log(data)
    window.location.href = "/"
})