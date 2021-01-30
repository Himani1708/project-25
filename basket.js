class basket{
    constructor(x,y,width,height){
        var options={
            density:80
        }

       this.basketbody=Bodies.rectangle(x,y,width,height,options);
       this.basketW=width;
       this.basketH=height;
       World.add(wld,this.basketbody)
       this.image= loadImage("DUSTBIN.png")

    }

    display(){
        var pos = this.basketbody.position;
        var angle= this.basketbody.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        
        fill("white");
        rect(0,0,this.basketW,this.basketH)
        pop();
    }

    
}