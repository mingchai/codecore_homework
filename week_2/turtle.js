class Turtle{
    constructor (x,y){
        this.x = x;
        this.y = y;
        this.turtleCompass = 0;
        this.turtleTravelLog = [];
        this.turtleTravelLog.push([this.x,this.y])
		}
		
    forward(num){
	
        for(let stepCount = 0; stepCount < num+1; stepCount++){
            if(this.turtleCompass == 90){
                this.turtleTravelLog.push([this.x, this.y +stepCount]);
            } else if(this.turtleCompass == 0){
                this.turtleTravelLog.push([this.x + stepCount, this.y]);
            } else if(this.turtleCompass == 180){
                this.turtleTravelLog.push([this.x + stepCount, this.y]);
            } else if(this.turtleCompass == 270){
                this.turtleTravelLog.push([this.x, this.y - stepCount]);
            } else if(this.turtleCompass == 360){
                this.turtleCompass = 0;
            } else if(this.turtleCompass < 0){
                this.turtleCompass * -1;
            }
        }
            
        return this;

    }
    
    right(){

    }

    left(){

    }

    allPoints(){

    }
};
let turtle = new Turtle(0,0)
console.log(turtle.forward(4));