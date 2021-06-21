const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bg
function preload(){
bg=loadImage("spriteimage/bg.png")
}


function setup(){
    var canvas = createCanvas(1400,650);
    engine = Engine.create();
    world = engine.world;
    
    platform = new Ground(70,500,400,350);
    box1 = new Box(1000,600,70,70);
    box2 = new Box(1300,600,70,70);
    box3 = new Box(1000,480,70,70);
    box4 = new Box(1300,480,70,70);
    box5 = new Box(1150,380,70,70);
    ground = new Ground(700,630,1400,20); 
    pig = new Pig(1150,600);
    pig2 = new Pig(1150,480);
    log = new Log(1150,500,375,PI/2);
    log2 = new Log(1150,410,375,PI/2);
    log3 = new Log(1075,380,180,PI/8);
    log4 = new Log(1250,380,180,-PI/8);
    bird = new Bird(400,400);    
  }

function draw(){
    background(bg);
    Engine.update(engine);
  /*  console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/

    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display(); 
    bird.display();
}