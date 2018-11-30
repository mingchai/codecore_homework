// ----- LOAD REQUIRED MODULES -----
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Welcome to Todo CLI! \n -------------------- \n (v) 'View' • (n) 'New' • (cX) 'Complete' • (dX) 'Delete' • (q) 'Quit'"
});

// ----- HOMEPAGE VIEW -----
rl.prompt();