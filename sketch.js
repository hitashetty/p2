const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Stone;
var Tree;
function preload()
{
	boyImage= loadImage("Images/boy.png");
	mangoImage= loadImage("Images/mango.png");
	stoneImage= loadImage("Images/stone.png");
	treeImage= loadImage("Images/tree.png");

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Tree = new tree(200,200,20,20);
    Stone = new stone(300,300,30,30);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Tree.display();
  Stone.display();
  drawSprites();
 
}

function detectcollison(){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}





