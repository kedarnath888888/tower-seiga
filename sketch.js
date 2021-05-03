const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var engine,world;
var ground1,ground2;
var chain1,sone1;
var box1,box2,box3,box4,box5,box6,box7;
var box01,box02,box03,box04,box05,box06,box07;

function setup() {
	
	engine = Engine.create();
	world = engine.world;
    createCanvas(1300, 600);

    ground1=new Ground(650,580,1300,20);
     ground2=new Ground(650,400,500,20);

     box1=new Box(760,365,50,50);
     box2=new Box(710,365,50,50);
     box3=new Box(660,365,50,50);
     box4=new Box(610,365,50,50);
     //layer2
     box5=new Box(710,315,50,50);
     box6=new Box(660,315,50,50);
     //layer3
     box7=new Box(685,265,50,50);

     //pyramid 2 
     box01=new Box(1000,545,50,50);
     box02=new Box(1050,545,50,50);
     box03=new Box(1100,545,50,50);
     box04=new Box(1150,545,50,50);
     box05=new Box(1050,500,50,50);
     box06=new Box(1100,500,50,50);
     box07=new Box(1075,450,50,50);
   

     
     
     
     
    Engine.run(engine);
    stone=new Stone(250,320,30);
	chain1=new Chain(stone.body,{x:240,y:280});
}

function draw() {
Engine.update(engine);
    background(230);
    textSize(21);
    fill ("black");
    text("press space bar to restart ",300,50);
    ground1.display();
    ground2.display();
    stone.display();
    chain1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
    //
    box01.display();
    box02.display();
    box03.display();
    box04.display();
    box05.display();
    box06.display();
    box07.display();
   
   
}
function mouseDragged(){ 
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	} 
	function mouseReleased(){
		chain1.fly();
		//Matter.Body.setPosition(stone.body, {x: 1000 , y: 100});
		} 
		function keyPressed(){ 
			if(keyCode === 32){ 
				chain1.attach(stone.body);
				} 
			   }
