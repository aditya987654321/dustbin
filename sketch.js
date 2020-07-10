const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world ,score = 0 ;
var box1, bin,wall1,wall2;
var backgroundImg,platform;
var bird, slingshot;


var gameState = "onSling";

function preload() {
    
    binimg = loadImage("sprites/wood1.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    
    
    ground = new Ground(600,height,1200,20);
    

    // base
   

    wall1 = new Wall(890,290,10,200);
    wall2 = new Wall(1090,290,10,200);
    ball = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:200, y:50});
}

function draw(){
    background("#ffffff");
        fill(255)
       
    Engine.update(engine);
    //strokeWeight(4);
    
    
    
    
    ground.display();

    ball.display();
   
   
    slingshot.display();   
    image(binimg,900,180,200,200) 
   
    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}




