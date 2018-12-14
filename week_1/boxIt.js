let largestW = 0;
let spaceAdd = 0;
debugger;

function addSpace(arr){
    
    for(let i in arr){
        if(arr[i].length > largestW){
            largestW = arr[i].length;
            // console.log(largestW);
        }
    };
    // console.log(largestW);

    for(let i in arr){
        if(arr[i].length = largestW){
            spaceAdd = (largestW - arr[i].length);
        }
    }
    // console.log(spaceAdd)
}


// ------ TOP LINE ------
function drawTopLine(str){
    let newStr = '';
    for(let i =0; i < largestW; i++){
        newStr += '\u2501';
    }
// let largestW = str.length;
    return '\u250f' + newStr+ '\u2513' + '\n';
}
// console.log(drawTopLine());

// ------ MIDDLE LINE ------
function drawMiddleLine(str){
    let newStr = '';
    for(let i = 0; i < largestW; i++){
        newStr += '\u2501';
    }
    return '\n'+'\u2523' + newStr + '\u252b'+ '\n';
}
// console.log(drawMiddleLine());

// ------ BOTTOM LINE ------
function drawBottomLine(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        newStr +='\u2501';
    }    
    return '\n'+'\u2517' + newStr + "\u2501".repeat(spaceAdd) + '\u251b';
}
// console.log(drawBottomLine());

// ------- DRAW BARS AROUND -------
function drawBarsAround(str){
    let newArr = [];
       if(str.length < largestW){
           newArr.push(" ".repeat(largestW - str.length))
       } else if(str.length == largestW){
           newArr.push("");
       }
       return '\u2503' + str + newArr.join('')+'\u2503';
   }
   

// drawBarsAround('This is a string');

// ------- BOX IT FUNCTION -------

function boxIt(arr){
    addSpace(arr);
    let newArr = [];

     for(let i in arr){
         if(i == 0){
            newArr.push(drawTopLine(arr[i]));
            newArr.push(drawBarsAround(arr[i]));
            // addSpace(arr[i]);
        } else if(i == arr.length -1){
            
            newArr.push(drawBarsAround(arr[i]));
            newArr.push(drawBottomLine(arr[i]));
            // addSpace(arr[i]);

        } else if(i > 0 && i < arr.length-1){
            newArr.push(drawMiddleLine(arr[i]));
            newArr.push(drawBarsAround(arr[i]));
            newArr.push(drawMiddleLine(arr[i]));
            // addSpace(arr[i]);
        }
     }
     return newArr.join('');
    }

console.log(boxIt(['first','Seconsadfasd', 'third']));



// // ------ GENERAL LINE ------
// function drawLine(num){
//     let str = '';
//     for(let i = 0; i < num; i++){
//         str +='\u2501';
//     }
//     console.log(str);
// }
// // console.log(drawLine());