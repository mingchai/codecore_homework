// ----- LOAD REQUIRED MODULES -----
const readline = require("readine");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ----- HOMEPAGE VIEW -----
rl.question("Welcome to Todo CLI! \n -------------------- \n (v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit", answer);