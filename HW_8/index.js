function letterGenerator(){
    for(let i = 0; i < 26; i++){
    
        let divs = document.createElement("div");
        let letter = (i+10).toString(36).toUpperCase();
    
        divs.innerText = letter;
        divs.style.border = "solid thin black"
        document.querySelector("div").append(divs);
    };
};

letterGenerator();

const secretWord = "testing".toUpperCase();

function blankGenerator(){
    for(let i = 0; i < secretWord.length; i++){
        const dashes = document.createElement("div");
        dashes.innerText = ' ';
        dashes.classList.add(`dashed-${i}`);
        
        document.querySelector("#letterInput").append(dashes);
    };
}

blankGenerator();

function select(){

    const img = "./assets/gallows.jpg"
    const img1 = "./assets/head.jpg";
    const img2 = "./assets/torso.jpg";
    const img3 = "./assets/left-leg.jpg";
    const img4 = "./assets/right-leg.jpg";
    const img5 = "./assets/left-arm.jpg";
    const img6 = "./assets/right-arm.jpg";
    const images = [img,img1, img2, img3, img4, img5, img6];

    document.querySelectorAll("#letterBoxes > div").forEach( div =>{
        div.addEventListener("click", event => {
            let selection = event.currentTarget;
            let selectedLetter = event.currentTarget.innerText;
            
            // change color of selected letter
                selection.classList.add("selected");
                selection.style.border = "solid thin red"


            // Compare target to secret word - find correct answers only
            for(let i = 0; i < secretWord.length; i++){
                if(selectedLetter == secretWord[i]){
                    document.querySelector(`.dashed-${i}`).innerText = secretWord[i];
                    selection.setAttribute("class", "correct")
                } 
            };

            // Set gallows image based on number of incorrect guesses
            let mistakes = document.querySelectorAll(".selected").length;
			console.log("​select -> mistakes", mistakes)
            document.querySelector("img").setAttribute("src", `${images[mistakes]}`);
            
        });
    });
};

select();