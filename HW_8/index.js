function letterGenerator(){
    for(let i = 0; i < 26; i++){
    
        let divs = document.createElement("div");
        let letter = (i+10).toString(36).toUpperCase();
    
        divs.innerText = letter;
        document.querySelector("div").append(divs);
    };
};

letterGenerator();

let secretWord = "test".toUpperCase();

function blankDashGen(){
    // let span = document.createElement("span");
    // document.querySelector("#letterInput").append(span);
    
    for(let i = 0; i < secretWord.length; i++){
        const dashes = document.createElement("div");
        dashes.innerText = ' ';
        dashes.classList.add("dashed");
        dashes.setAttribute("id", i);
        document.querySelector("#letterInput").append(dashes);
    };
}

blankDashGen();

function select(){
    document.querySelectorAll("#letterBoxes > div").forEach( div =>{
        div.addEventListener("click", event => {
            let selectedLetter = event.currentTarget;
            
            // change color of selected letter
            if(selectedLetter.className == "selected"){
                selectedLetter.classList.remove("selected");
            } else {
                selectedLetter.classList.add("selected");
                selectedLetter.classList.remove("style");
            }

            let selection = Array.from(document.querySelectorAll(".selected"));
            for(let obj of selection){
                console.log(obj.innerText);
                console.log(event.target.innerText);
                if(event.target.innerText == "t"){
                    let x = document.querySelector("#dashed")
                        dashes.innerText = secretWord[0];
                    }
            }
        })
    });
};

select();



