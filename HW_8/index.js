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
let span = document.createElement("span");
document.querySelector("#letterInput").append(span);

for(let i = 0; i < secretWord.length; i++){
    const dashes = document.createElement("div");
    dashes.innerText = "_ ";
    dashes.classList.add("dashed");
    dashes.setAttribute("id", i);
    document.querySelector("span").append(dashes);
}

function select(){
    document.querySelectorAll("#letterBoxes > div").forEach( div =>{
        div.addEventListener("click", event => {
            let selectedLetter = event.currentTarget;
            
            
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
                for(let keys of secretWord){
                    console.log(keys);
                    let {keys} = secretWord;
                }
                if(event.target.innerText == "t"){
                    let x = document.querySelector("#dashed")
                        dashes.innerText = secretWord[0];
                    }
            }
            // console.log(selection);
            // let letter = event.target.innerText;
                // if(selection[0] == secretWord[0]){
                //     dashes.innerText = secretWord[0];
                // }
        })
    });
};

select();



