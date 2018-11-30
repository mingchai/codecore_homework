// ----- LOAD REQUIRED MODULES -----
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Welcome to Todo CLI! \n -------------------- \n (v) 'View' • (n) 'New' • (cX) 'Complete' • (dX) 'Delete' • (q) 'Quit' \n"
});

// ----- HOMEPAGE VIEW -----
rl.prompt();

rl.on('line', (line) => {
    switch (line.trim()) {
      case 'v':
        console.log('View Page!');
        break;
      case 'n':
        console.log('New Page!');
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