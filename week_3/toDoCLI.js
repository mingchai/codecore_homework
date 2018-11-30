// ----- LOAD REQUIRED MODULES -----
const readline = require("readline");
const fs = require("fs");
const options = "--------------------\n(v) 'View' • (n) 'New' • (cX) 'Complete' • (dX) 'Delete' • (q) 'Quit' \n"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `Welcome to Todo CLI!\n${options} \n`
});

// ----- HOMEPAGE VIEW -----
rl.prompt();


rl.on('line', (line) => {
    switch (line.trim()) {
      case 'v':
        // console.log('Welcome to Your View Page!');
        fs.readFile("./toDoList.txt", "utf8", (error, data) =>{
            const toDoList = data
            if (error){
                return console.error(error);
            } else{
                console.log("Welcome to your list!")
                console.log(toDoList);
                console.log(options);
            }
        })
        break;
      case 'n':
        rl.question("What would you like to add? Type 'back' to go to the main menu\n", addItem)
        // console.log(options);
        break;
      case 'q':
        console.log('See you later!');
        rl.close();
        break;
      default:
        console.log(`I didn't quite catch that. Please choose from the following:'`);
        console.log(options);
        break;
    }
    // rl.prompt();
  }).on('close', () => {
    console.log('Application Closed');
    process.exit(0);
  });

//   ----- FUNCTIONS -----

// ----- NEW -----
function addItem(answer){
    if(answer === "back"){
        rl.prompt();
    } else {
        let userInput = `\n[] ${answer}`;
        fs.appendFile("./toDoList.txt", userInput, (err)=>{
            if(err){
                console.error(err);
            }
        })
        console.log(`You added: ${answer}!`);
    }
}
// ----- COMPLETE -----
function completeItem(answer){
    let userInput = `\n[✓] ${answer}`;
    fs.readFile("./toDoList.txt", itemSelected)

    const reformatedData = data
      .split("\n")
      .map((line, index) => `${(index + 1).toString().padEnd(3)}| ${line}`)
      .join("\n");
      
    fs.writeFile("./toDoList.txt", userInput, (err)=>{
        if(err){
            console.error(err);
        }
    })
    console.log(`You completed: ${answer}!`);
}