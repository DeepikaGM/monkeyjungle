// creating objects
var monkey,monkey_img;
var jungle, jungle_img;
var stone, stone_img;
var invisibleGround
var survivalTime=0;
var score=0;
var stoneGroup,foodGroup;


function preload(){
  monkey_img=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png", "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
  //monkey_img=loadImage("Monkey_01.png");
  
  jungle_img=loadImage("jungle.jpg");
  stone_img=loadImage("stone.png");
  banana_img=loadImage("banana.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  
  
  jungle=createSprite(0,0,400,400);
  jungle.addImage(jungle_img);
  jungle.velocityX=-2;
  jungle.scale=1.5;
  
  monkey=createSprite(250,250,50,50);
  monkey.addAnimation("running",monkey_img);
  monkey.scale=0.2;           
  
  
  
  
  foodGroup=createGroup();
  stoneGroup=createGroup();
  
  invisibleGround=createSprite(0,550,600,20);
  invisibleGround.visible=false;
  //monkey.collide(invisibleGround);
  
  
}

function draw() {
  background(220);
  monkey.collide(invisibleGround);
  
    survalTime=survivalTime+Math.round(getFrameRate()/60);

  if(keyDown("space")){
    monkey.velocityY=-7;
 
  }
   monkey.velocityY = monkey.velocityY + 0.8;
  if (jungle.x < 0)
    {
      jungle.x = jungle.width/2;
    }
  
  
   if(foodGroup.isTouching(monkey))
  {
    score=score+2;
    
    foodGroup.destroyEach();
  }
  switch(score){
    case 10: monkey.scale=0.12;
            break;
    case 20: monkey.scale=0.14;
            break;
  
            case 30: monkey.scale=0.16;
            break;  
    case 40: monkey.scale=0.18;
            break;
    default: break;
  }
  
  if(stoneGroup.isTouching(monkey))
  {
    monkey.scale=0.2;
  }
  
  
  
  spawnObstacle();
  spawnBanana();
  
  drawSprites();
  
  textSize(20);
  fill("white");
  text("Survival Time : " + survivalTime,30,50);
  
  textSize(18);
  fill("white");
  text("Banana's Eaten : "+ score,400,50);
}


function spawnObstacle(){
  
  if(frameCount%170===0){
    stone=createSprite(50,424,20,20)
    stone.x=Math.round(random(495,500));
    stone.addImage(stone_img);
    stone.scale=0.3;
    stone.velocityX=-5;
    stone.lifetime=300;
    stoneGroup.add(stone);
    }
}

function spawnBanana(){
  
  if(frameCount%90===0){
    banana=createSprite(50,80,20,20)
    banana.x=Math.round(random(470,490));
    banana.y=Math.round(random(90,150))
    banana.addImage(banana_img);
    banana.scale=0.1
    banana.velocityX=-5
    banana.lifetime=300
    foodGroup.add(banana);
    }
}