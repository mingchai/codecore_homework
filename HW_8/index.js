function letterGenerator(){
    for(let i = 0; i < 26; i++){
    
        let divs = document.createElement("div");
        let letter = (i+10).toString(36).toUpperCase();
    
        divs.innerText = letter;
        document.querySelector("div").append(divs);
    };
};

letterGenerator();

const secretWord = "test".toUpperCase();

function blankGenerator(){
    for(let i = 0; i < secretWord.length; i++){
        const dashes = document.createElement("div");
        dashes.innerText = ' ';
        dashes.classList.add(`dashed-${i}`);
        // dashes.setAttribute("id", `ltr`);
        document.querySelector("#letterInput").append(dashes);
    };
}

blankGenerator();

function select(){
    document.querySelectorAll("#letterBoxes > div").forEach( div =>{
        div.addEventListener("click", event => {
            let selection = event.currentTarget;
            let selectedLetter = event.currentTarget.innerText;
            
            // change color of selected letter
            if(selection.className == "selected"){
                selection.classList.remove("selected");
            } else {
                selection.classList.add("selected");
                selection.classList.remove("style");
            }

            // Compare target to secret word
            for(let i = 0; i < secretWord.length; i++){
                if(selectedLetter == secretWord[i]){
                    document.querySelector(`.dashed-${i}`).innerText = secretWord[i];
                }
            }
            
        })
    });
};

select();



