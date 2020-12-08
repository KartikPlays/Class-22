const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object;






function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;
  var goption =
  {
     isStatic:true
  }

  object=Bodies.rectangle(400,390,800,20,goption);
  World.add(world,object);
  object.shapeColor=("brown");
  var boption = 
  {
     restitution:1.0
  }
  object1=Bodies.circle(530,200,30,boption);
  World.add(world,object1);
  object1.shapeColor=("red");
  
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(object1.position.x,object1.position.y,30,30,);


  
}    