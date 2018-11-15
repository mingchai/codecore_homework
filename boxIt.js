let userInput = parseInt(process.argv[2]);
// ------ GENERAL LINE ------
function drawLine(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push('\u2501');
    }
    console.log(arr.join(''));
}

console.log(drawLine(userInput));

// ------ TOP LINE ------
function drawTopLine(num){
    let arr1 = [];
    for(let i = 1; i < num; i++){
        arr1.push('\u2501');
    }
    console.log('\u250f' + arr1.join('')+ '\u2513');
}

console.log(drawTopLine(userInput));

// ------ MIDDLE LINE ------
function drawMiddleLine(num){
    let arr1 = [];
    for(let i = 1; i < num; i++){
        arr1.push('\u2501');
    }
    console.log('\u2523' + arr1.join('')+ '\u252b');
}

console.log(drawMiddleLine(userInput));

// ------ BOTTOM LINE ------
function drawBottomLine(num){
    let arr1 = [];
    for(let i = 1; i < num; i++){
        arr1.push('\u2501');
    }
    console.log('\u2517' + arr1.join('')+ '\u251b');
}

console.log(drawBottomLine(userInput));
