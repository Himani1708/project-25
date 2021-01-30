
const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var eng , wld;
var ground;
var line1;
var line2;
var line3;
var paper;

function setup() {
  createCanvas(1200,800);
  eng=Engine.create();
  wld=eng.world;

  ground= new Ground(600,700,1200,30);

  line1= new basket(1000,350,180,30);
	line2= new basket(1105,100,30,120);
  line3= new basket(895,100,30,120);
  
  paper= new Paper(200,40,30);

  
}

function draw() {
  Engine.update(eng);
  background("white");  
  
  ground.display();
  line1.display();
  line2.display();
  line3.display();
  paper.display();

  drawSprites();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    
   Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40});
     
   }
 }
 