function Turtle(x,y){
    this.x = x;
    this.y = y;
}

let turtle = new Turtle(0,0); //could be any coordinates
    // count: 0,
    let newArr = [];
    Turtle.prototype.forward = function (num){ 
        for(let stepCount = 0; stepCount < num + 1; stepCount++){
            newArr.push([this.x + stepCount, this.y]);
        }
        console.log(newArr); //test
    };

    Turtle.prototype.right = function(){
        this.x + 0;
    };

    Turtle.prototype.left = function(){
        this.x += 0;
    };

    Turtle.prototype.allPoints = function(coordinate){
        let log = [];
        log.push(coordinate);
    };

    console.log(turtle.forward(4));

// class Turtle{
//     constructor (x,y){
//         this.x = x;
//         this.y = y;
//     }

//     forward(){

//     }

//     right(){

//     }
//     left(){

//     }
//     allPoints(){

//     }
// }