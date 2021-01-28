
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(400,100,600,40);

	bob1=new Bob(400,600,100);
	bob2=new Bob(500,600,100);
	bob3=new Bob(600,600,100);
	bob4=new Bob(300,600,100);
	bob5=new Bob(200,600,100);

	rope1=new Rope(bob1.body,roof.body,-bob1.r/50*2,0);
	rope2=new Rope(bob2.body,roof.body,bob1.r/2*2,0);
	rope3=new Rope(bob4.body,roof.body,-bob1.r/2*2,0);
	rope4=new Rope(bob3.body,roof.body,bob1.r/2*4,0);
	rope5=new Rope(bob5.body,roof.body,-bob1.r/2*4,0);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(150);
 
  
  bob5.collide=(bob4);
  bob4.collide=(bob1);
  bob1.collide=(bob2);
  bob2.collide=(bob3);

  bob5.velocityY=bob5.velocityY+0.5;

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

   drawSprites();
   keyPressed();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-120,y:120})
  }
 
}



