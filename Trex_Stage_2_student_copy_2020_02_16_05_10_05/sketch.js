var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudGroup,cloudimg;
var ObstaclesGoup,ob1,ob2,ob3,ob4,ob5,ob6;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  cloudimg = loadImage("cloud.png");
  
  ob1 = loadImage("obstacle1.png");
  ob2 = loadImage("obstacle2.png");
  ob3 = loadImage("obstacle3.png");
  ob4 = loadImage("obstacle4.png");
  ob5 = loadImage("obstacle5.png");
  ob6 = loadImage("obstacle6.png");
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudGroup = new Group();
  
  ObstaclesGroup = new Group();
}

function draw() {
  background("blue");
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnObstacles();
  spawnClouds();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(650,115,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage("cloud",cloudimg);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 534;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    cloudGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 90 === 0) {
    var obstacles = createSprite(650,165,40,10);
    //cloud.y = Math.round(random(80,120));
    //obstacles.addImage("obstacles",cloudimg);
    //obstacles.scale = 0.5;
    obstacles.velocityX = -2;
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1: obstacles.addImage(ob1);
        break;
      case 2: obstacles.addImage(ob2);
        break;
      case 3: obstacles.addImage(ob3);
        break;
      case 4: obstacles.addImage(ob4);
        break;
      case 5: obstacles.addImage(ob5);
        break;
      case 6: obstacles.addImage(ob6);
        break;
      default : break;  
    }
    
    if(rand === 1)
      obstacles.scale=0.2;
    else
      obstacles.scale=0.5;
     //assign lifetime to the variable
    obstacles.lifetime = 534;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    ObstaclesGroup.add(obstacles);
  }
  
}