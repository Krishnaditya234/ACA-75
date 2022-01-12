const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, shovel,ball1,ball2,ball3;
var chair1, chair2, umbrella1, umbrella2,basket, backgroundImg;

function preload(){
    bgimg = loadImage("sprites/beach.jpg");
}

function setup(){
    canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,600,1400,10);

    ball1 = new Ball(1300,550,70,70);
    ball2 = new Ball(700,300,70,70);
    ball3 = new Ball(400,550,70,70);

    chair1 = new Chair(1200,550,150,150);
    chair2 = new Chair(700,550,150,150);

    shovel = new Shovel(500,100,100,100);

    umbrella1 = new Umbrella(950,590,200,300);
    umbrella2 = new Umbrella(100,590,200,300);

    basket = new Basket(300,300,100,100);
}

function draw(){
    background(bgimg);
    Engine.update(engine);

    ground.display();

    ball1.display();
    ball2.display();
    ball3.display();

    basket.display();

    chair1.display();
    chair2.display();

    shovel.display();

    umbrella1.display();
    umbrella2.display();
}