class Bob {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }

        this.body=Bodies.circle(x,y,r/2,options);
        this.r=r;
        World.add(world,this.body);
   }
   display(){

       var pos =this.body.position;

       push()
       translate(pos.x,pos.y);
       rectMode(CENTER);
       strokeWeight(3);
       fill(225,0,225);
       ellipse(0,0,this.r,this.r);
       pop();
   }
}