for(let i = 0; i < 26; i++){
    
    let divs = document.createElement("div");
    let letter = (i+10).toString(36).toUpperCase();
    divs.innerText = letter;
    // divs.outerHTML("div");
    // divs.innerHTML = "<div>";
    // divs.classList.add("container");
    // divs.style.border = "thin solid black";
    // divs.style.borderRadius = "100%";
    document.querySelector("div").append(divs);
}

function select(){
    document.querySelectorAll("div > div").forEach( div =>{
        div.addEventListener("click", event => {
            let selectedLetter = event.currentTarget;
            
            
            if(selectedLetter.className == "selected"){
                selectedLetter.classList.remove("selected");
                selectedLetter.style.backgroundColor = "red";
            } else {
                selectedLetter.classList.add("selected");
                selectedLetter.style.backgroundColor = "";
            }
            
        })
    });
}

select();

