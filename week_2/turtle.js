class Turtle{
    constructor (x,y){
        this.x = x;
        this.y = y;
        this.turtleCompass = 0;
        this.turtleTravelLog = [];
        this.turtleTravelLog.push([this.x,this.y])
		}
		
    forward(num){
	
        for(let stepCount = 0; stepCount < num; stepCount++){
            if(this.turtleCompass == 90 || this.turtleCompass == -270){
                this.turtleTravelLog.push([this.x, this.y += 1]);
            } else if(this.turtleCompass == 0){
                this.turtleTravelLog.push([this.x += 1, this.y]);
            } else if(this.turtleCompass == 180 || this.turtleCompass == -180){
                this.turtleTravelLog.push([this.x -= 1, this.y]);
            } else if(this.turtleCompass == 270 ||this.turtleCompass == -90 ){
                this.turtleTravelLog.push([this.x, this.y -= 1]);
            } else if(this.turtleCompass == 360 ||this.turtleCompass == -360){
                this.turtleCompass = 0;
            }
        }
            
        return this;

    }
    
    right(){
        this.turtleCompass += 90;
        return this;
    }

    left(){
        this.turtleCompass -= 90;
        return this;
    }

    allPoints(){
        return this.turtleTravelLog;
    }
    print(){
        let coordinates = this.turtleTravelLog;
       
        function maximumY(){
            let maxY = 0;
            for (let index = 0; index < coordinates.length; index++) {
                let innerArrayIndex = coordinates[index]
                if(maxY < innerArrayIndex[1]) maxY = innerArrayIndex[1];
            };
            return maxY;
        };
        
        function maximumX(){
            let maxX = 0; 
            for (let index = 0; index < coordinates.length; index++) {
                let innerArrayIndex = coordinates[index]
                if(maxX < innerArrayIndex[0]) maxX = innerArrayIndex[0];
            };
            return maxX;
        };
        
        function boardDimensions(){
            let board = [];
            let maxY = maximumY();
            let maxX = maximumX();
            for ( let y = 0 ; y <= maxY ; y++){
                for (let x = 0 ; x <= maxX ;  x++){
                    board.push([x, y]);
                };
            };
            return board;
        };

        function printTurtleBoard(){
            let turtleSteps = coordinates;
            let boardSpread = '';
            let currentRow = 0;
            let map = boardDimensions();

            for (let turtleLogIndex = 0; turtleLogIndex < map.length; turtleLogIndex++) {
            let turtleLogPoint = map[turtleLogIndex],
                turtleLogPointX = turtleLogPoint[0],
                turtleLogPointY = turtleLogPoint[1],
                turtleTracks = false; 
                
                for ( let turtleStepIndex = 0; turtleStepIndex < turtleSteps.length;turtleStepIndex++){
                    let turtleStep = turtleSteps[turtleStepIndex], 
                    turtleStepX = turtleStep[0],
                    turtleStepY = turtleStep[1];
                    if(turtleLogPointX == turtleStepX && turtleLogPointY == turtleStepY) turtleTracks = true; 
                };

                let newLine = map[turtleLogIndex][1] !== currentRow;

                if (newLine) {
                boardSpread += turtleTracks ? "\n-": "\n ";
                currentRow += 1;
                } else {
                boardSpread += turtleTracks ? "-" : " ";
                };
            };
            console.log(boardSpread);
            };
            printTurtleBoard();
        };
        
};
let turtle = new Turtle(0,0)
// console.log(turtle.forward(4));
// console.log(turtle.forward(4).right().forward(4));
console.log(turtle.forward(4).right().forward(4).right().forward(4).right().forward(4).print());
// console.log(turtle.forward(4).left().forward(4).allPoints());
// console.log(turtle.forward(4).left().forward(4).left().left().forward(1).left().left());
// console.log(turtle.forward(4).left().forward(4).left().forward(4).left().forward(4).print());