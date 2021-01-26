var roof1;
var ball1, ball2,ball3,ball4;
var rope1, rope2, rope3, rope4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(450,250,400,20);
	ball1 = new Ball(300,500);
	ball2 = new Ball(400,500);
	ball3 = new Ball(500,500);
	ball4 = new Ball(600,500);
	rope1 = new Rope(ball1.body,roof1.body)
	rope2 = new Rope(ball2.body,roof1.body)
    rope3 = new Rope(ball3.body,roof1.body)
	rope4 = new Rope(ball4.body,roof1.body)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  drawSprites();

  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  


 
}



