
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1, paper2,paper3,paper4;
var rope1,rope2,rope3,rope4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);

	paper1=new Paper(100,600,40,40);
	paper2=new Paper(200,500,40,40);
	paper3=new Paper(100,400,40,40);
	paper4=new Paper(150,300,40,40);
	rope1=new Rope(paper1.body,paper2.body,paper3.body,paper4.body);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  rope1.display();
  drawSprites();
 
}



