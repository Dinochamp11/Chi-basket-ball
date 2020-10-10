
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	//paper
	 paper1 = new Paper(150, 500, 14);
	 //dustbin
	 dustbinRight = new Dusty(856, 540, 10, 150);
	 dustbinMiddle = new Dusty(750, 600, 200, 10); 
	 dustbinLeft = new Dusty(647, 540, 10, 150);

	 blocker1 = new Dusty(570,460,150,10)
	 blocker2 = new Dusty(930,460,150,10)
	 blocker3 = new Dusty(960,380,10,150)
	  //ground 
	  ground = new Ground(600, height-35, 1600, 15);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  



  dustbinRight.display();
  dustbinMiddle.display();
  dustbinLeft.display();
  blocker1.display();
  blocker2.display();
  blocker3.display();
  blocker1.display();
  blocker1.display();
  paper1.display();
  ground.display();
  drawSprites();
  
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15});

	}
}

