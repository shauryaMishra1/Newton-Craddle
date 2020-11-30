
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ballDiameter=40

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	
engine = Engine.create();
	world = engine.world;


	roof=new Roof(width/2,height/4,width/7,20)
  ball1=new Ball(width/2-ballDiameter*2,height/4+500,ballDiameter)
  ball2=new Ball(width/2-ballDiameter*1,height/4+500,ballDiameter)
  ball3=new Ball(width/2,height/4+500,ballDiameter)
  ball4=new Ball(width/2+ballDiameter*1,height/4+500,ballDiameter)
  ball5=new Ball(width/2+ballDiameter*2,height/4+500,ballDiameter)
  rope1=new Rope(ball1.body,roof.body,-ballDiameter*2,0)
  rope2=new Rope(ball2.body,roof.body,-ballDiameter*1,0)
  rope3=new Rope(ball3.body,roof.body,0,0)
  rope4=new Rope(ball4.body,roof.body,+ballDiameter*1,0)
  rope5=new Rope(ball5.body,roof.body,+ballDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});
    
  }

}
function drawLine(constraint){
ballbodyposition=constraint.bodyA.position
roofbodyposition=constraint.bodyB.position
roofoffSet=constraint.pointB
roofX=roofbodyposition.x+roofoffSet.x
roofY=roofbodyposition.y+roofoffSet.y
line(ballbodyposition.x,ballbodyposition.y,roofX,roofY)
}


