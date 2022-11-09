let character = document.getElementById("cop")

let x = 0;
let y = 0;

window.addEventListener('keydown', function(event) {   
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    if(key === "ArrowRight") {     
        character.style.left = x + "px"
        x += 5
        //Endre posisjonen   
    }  


    
});


