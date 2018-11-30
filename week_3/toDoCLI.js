// ----- LOAD REQUIRED MODULES -----
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Welcome to Todo CLI! \n-------------------- \n (v) 'View' • (n) 'New' • (cX) 'Complete' • (dX) 'Delete' • (q) 'Quit' \n"
});

// ----- HOMEPAGE VIEW -----
rl.prompt();
const options = "\n(v) 'View' • (n) 'New' • (cX) 'Complete' • (dX) 'Delete' • (q) 'Quit' \n"

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
        rl.question("What would you like to add? \n", addItem)
        break;
      case 'q':
        console.log('See you later!');
        rl.close();
        break;
      default:
        console.log(`I didn't quite catch that'`);
        break;
    }
    // rl.prompt();
  }).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
  });

//   ----- FUNCTIONS -----
function addItem(answer){
    let userInput = `\n• ${answer}`;
    fs.appendFile("./toDoList.txt", userInput, (err)=>{
        if(err){
            console.error(err);
        }
    })
    console.log(`You added: ${userInput}!`);
}