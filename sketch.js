
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj, leftWall, rightWall;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	var ballOptions = {
		isStatic : false,
		restituton:0.5,
		friction:0,
		density:1.2,
	}

	groundObj = new Ground(width/2, 670, width, 20);
	leftWall = new Ground (1100, 600, 20, 120);
	rightWall = new Ground(1315, 600, 20 ,120);

	//Create the Bodies Here.
	ball = Bodies.circle(260, 100, 20, ballOptions);
	World.add (world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	groundObj.display();
	leftWall.display();
	rightWall.display();

	ellipse(ball.position.x, ball.position.y, 40, 40)

  drawSprites();
 
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:85, y:-85})
	}
}

