const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;


function setup(){
    var canvas = createCanvas(2200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(windowWidth/2, 590, windowWidth, 20);

    box1 = new Box(1000, 570, 60, 60);
    box2 = new Box(1140, 570, 60, 60);
    box3 = new Box(1000, 470, 60, 60);
    box4 = new Box(1140, 470, 60, 60);
    box5 = new Box(1070, 420, 60, 60);

    pig1 = new Pig(1070, 570, 50, 50); 
    pig2 = new Pig(1070, 470, 50, 50);

    log1 = new Log(1074, 510, 210, 20, PI);
    log2 = new Log(1074, 450, 210, 20, PI);
    log3 = new Log(1070, 420, 120, 20, 135);
    log4 = new Log(1080, 420, 120, 20, 45);

    bird1 = new Bird(100, 300, 50, 50);

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird1.display();
}