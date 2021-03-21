const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stick;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var ball;
var band;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
stick=new Ground(500,300,300,10);
block1= new Box(400,260,30,40);
block2=new Box(440,260,30,40);
block3=new Box(470,260,30,40);
block4=new Box(490,260,30,40);
block5=new Box(520,260,30,40);
block6=new Box(550,260,30,40);
block7=new Box(570,260,30,40);
block8 = new Box(440,230,30,40);
block9 = new Box(470,230,30,40);
block10 = new Box(490,230,30,40);
block11 = new Box(520,230,30,40);
block12 = new Box(550,230,30,40);
block13=new Box(470,190,30,40);
block14=new Box(490,190,30,40);
block15=new Box(520,190,30,40);
block16= new Box(490,150,30,40);

ball=new Ball(200,300,30);
band = new Rope(ball.body,{x:200, y:300});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
 stick.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 ball.display();
 band.display();
  //drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  band.fly();
}

function keyPressed(){

  if (keyCode === 32){
  
  
  band.attach(ball.body);
  
  
  }
  
  
  
  }