const Engine=Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;

var engine,world,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world= engine.world;

  var options ={ 
    isStatic: true
  }
  
  ground=Bodies.rectangle(200,395,400,10,options);
  World.add(world,ground);

  var options1 ={ 
    restitution:1
  }
ball=Bodies.circle(200,100,20, options1);
World.add(world,ball);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x,ground.position.y,400,10);
  ellipse(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
}