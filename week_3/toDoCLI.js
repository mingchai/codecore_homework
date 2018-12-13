// ----- LOAD REQUIRED MODULES -----
const readline = require("readline");
const fs = require("fs");
const options = "--------------------\n(v) 'View' • (n) 'New' • (cX) 'Complete' • (dX) 'Delete' • (q) 'Quit' \n"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `Welcome to Todo CLI!\n${options} \n`
});

let toDos = [];

// ----- HOMEPAGE VIEW -----
rl.prompt();


rl.on('line', (line) => {
    switch (line.trim()) {
      case 'v':
        // console.log('Welcome to Your View Page!');
        viewList()
        break;
      case 'n':
        rl.question("What would you like to add? Type 'back' to go to the main menu\n", addItem)
        break;
      case 'c':
        rl.question("What item number has been completed? Type 'back' to go to the main menu\n", completeItem)
        break;
      case 'd':
        rl.question("What item number needs to be deleted? Type 'back' to go to the main menu\n", deleteItem)
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

//----- VIEW -----
function viewList(){
    console.log("Welcome to your list!")
    if (toDos.length === 0) {
        console.log('nothing added yet!');
        console.log(options);
   } else {
    for (let i = 0; i < toDos.length; i++){
        if (toDos[i][0] === false) {

        console.log (`${i}  [ ] ${toDos[i][1]}`)

    } else if (toDos[i][0] === true) {

        console.log(`${i}  [✓] ${toDos[i][1]}`)
        }
        
    }
    console.log(options);
};


    // fs.readFile("./toDoList.txt", "utf8", (error, data) =>{

    //     if (error){

    //         return console.error(error);

    //     } else {
    //         console.log("Welcome to your list!")
    //         console.log(data.toString());
    //         console.log(options);
    //     }
    // })
}


// ----- NEW -----
function addItem(answer){
    if(answer === "back"){
        rl.prompt();
    } else {
        toDos.push([false, answer])
        // let newArr = [];
        // let userInput = `[ ] ${answer} \n`;
        // let modifiedInput = newArr.push(userInput)
        // const toDoList = newArr
        //     .map((line, index) => `${(index)
        //     .toString()
        //     .padEnd(2)} -- ${line}`)
        //     .join("\n");
            
        // fs.appendFile("./toDoList.txt", toDoList, (err, data)=>{
        //     if(err){
        //         console.error(err);
        //     } else{
                
            

        //     let fullInput = userInput.replace (/^/,(line, index) => {`${(index)} ${line}`})
        //     }
        // })
        console.log(`You added: ${answer}!`);
        console.log(options);
    }
}


// ----- COMPLETE -----
function completeItem(answer){

    if(answer == "back"){
        rl.prompt();
    } else { 
        let itemNum = '';
        for (let i = 1; i<answer.length; i++){
            itemNum += answer[i]
        }
        toDos[itemNum] = true;
        console.log(`Completed "${toDos[itemNum]}"`)
    
        // let userInput = `\n[✓] ${answer}`;
        // fs.readFile("./toDoList.txt", "utf8", (err, data)=>{
        //     if(err){
        //         console.error(err);
        //     } else {
        //         let currentItem = data.toString().split("\n")
                
        //         let checkedItem = data.replace(currentItem, userInput)
        //         // console.log(currentItem); //return the data in a form that you can evaluate
        //         console.log(checkedItem); //return the data in a form that you can evaluate
        //     }
        // })
        // fs.writeFile("./toDoList.txt", userInput, (err)=>{
        //     if(err){
        //         console.error(err);
        //     }
        }
        console.log(`You completed: ${answer}!`);
        console.log(options);
    }

    // ----- DELETE -----
    function deleteItem(answer){

        if(answer == "back"){
            rl.prompt();
        } else {
        let itemNum ='';
        for (let i = 1; i<answer.length; i++){
            itemNum += answer[i]
        }
         let deletedItem = toDos.splice(itemNum,1);
         console.log(`You deleted ${deletedItem[0][1]}!`);
         console.log(options);
        }
    }