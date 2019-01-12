for(let i = 0; i < 26; i++){
    
    let divs = document.createElement("div");
    let letter = (i+10).toString(36);
    divs.innerText = letter;
    // divs.outerHTML("div");
    // divs.innerHTML = "<div>";
    // divs.classList.add("container");
    // divs.style.border = "thin solid black";
    // divs.style.borderRadius = "100%";
    document.querySelector("div").append(divs);
}

document.querySelectorAll("div > div").forEach( div =>{
    div.addEventListener("click", event => {
        console.log(event.currentTarget.style.backgroundColor = "red");
    })
})