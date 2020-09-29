const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground1, box2, pig1, log1, log2, box3, box4, pig2, box5, log3, log4, bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(700,320,70,70);
    box2 = new box(920, 320, 70, 70);

    box3 = new box(700,240,70,70);
    box4 = new box(920, 240, 70,70);

    box5 = new box(795, 150, 70,70);

    ground1 = new Ground(600, height, 1200, 50);

    pig1 = new Pig(810,220);
    pig2 = new Pig(810,350);

    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300, PI/2);

    log3 = new Log(730, 150,160, PI/6);
    log4 = new Log(820, 150, 150, -PI/6);

    bird1 = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box1.body.position.x);
    console.log(box2.body.angle);

    box1.display();
    ground1.display();
    box2.display();
    pig1.display();
    log1.display();
   log2.display();
   box3.display();
   box4.display();
   pig2.display();
   box5.display();
   log3.display();
   log4.display();
   bird1.display();
}