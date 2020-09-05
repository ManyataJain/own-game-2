var dog,dogRunning;
var obstacle;
var backgroundimg;


function preload(){
  dogRunning=loadAnimation("dog1.png","dog2.png","dog3.png","dog4.png");

  backgroundimg=loadImage("BACKGROUND.png");
  
  //coneimg=loadImage("images/cone.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

 dog=createSprite(400, 200, 50, 50);

 dog.addAnimation("running",dogRunning)
 dog.scale=3;

 obstacle1 = loadImage("barricade.png");
 // obstacle2 = loadImage("images/energy1.png");
  obstacle2 = loadImage("truck1.png");
  obstacle3 = loadImage("rock.png");
  obstacle4 = loadImage("cone.png");
  obstacle5 = loadImage("truck2.png")
  
}

function draw() {
  background(backgroundimg);  
  background.velocityY=-3;
  if(keyDown(UP_ARROW)){
    dog.y=dog.y-3;
    camera.position.y=dog.y;
  }
  if(keyDown(RIGHT_ARROW)){
    dog.x=dog.x+3;
  }
  if(keyDown(LEFT_ARROW)){
    dog.x=dog.x-3;
  }
   
 spawnObstacles();
  

drawSprites();
}
function spawnObstacles() {
    if(frameCount % 60 === 0) {
      var randx=Math.round(random(300,800))
      var obstacle = createSprite(randx,65,10,40);
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                obstacle.scale=0.5;
                break;
        case 2: obstacle.addImage(obstacle2);
                obstacle.scale=4;
                obstacle.velocityY=3;
                break;
        case 3: obstacle.addImage(obstacle3);
                obstacle.scale=2;
                break;
        case 4: obstacle.addImage(obstacle4);
                break;
        case 5: obstacle.addImage(obstacle5);
                obstacle.scale=4;
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.5;
      obstacle.lifetime = 300;
      //add each obstacle to the group
      //obstaclesGroup.add(obstacle);
      
      
    }
  }