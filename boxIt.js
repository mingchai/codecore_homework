let userInput = process.argv[2];

function drawLine(num){
    let arr = [];
    for(let i = 0; i < userInput.length; i++){
        arr.push('-');
    }
    console.log(arr.join(''));
}

console.log(drawLine(4));

function drawTopLine(num){
    let arr1 = [];
    for(let i = 1; i < userInput.length; i++){
        arr1.push('-');
    }
    console.log('\u250f' + arr1.join('')+ '\u2513');
}

console.log(drawTopLine());