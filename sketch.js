var fury, obstacle1,margin1,margin2,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7
var fury
function setup() {
  createCanvas(displayWidth,displayHeight-110);
  fury=createSprite(50,displayHeight-110/2,10,10)
  obstacle4=createSprite(450,50,5,75)
  obstacle6=createSprite(900,50,5,75)
  obstacle5=createSprite(750,50,5,75)
  obstacle3=createSprite(600,50,5,75)
  obstacle1=createSprite(150,50,5,75)
  obstacle2=createSprite(300,50,5,75)
  obstacle7=createSprite(1050,50,5,75)
  margin1=createSprite(displayWidth/2,0,displayWidth,50)
  margin2=createSprite(displayWidth/2,displayHeight-110,displayWidth,50)
  obstacle1.velocityY=random(10,50)
  obstacle2.velocityY=random(20,50)
  obstacle3.velocityY=random(10,50)
  obstacle4.velocityY=random(10,50)
  obstacle5.velocityY=random(10,50)
  obstacle7.velocityY=random(10,50)
  obstacle6.velocityY=random(10,50)
  margin1.shapeColor="black"
  margin2.shapeColor="black"
  obstacle1.shapeColor="black"
  obstacle2.shapeColor="black"
  obstacle3.shapeColor="black"
  obstacle4.shapeColor="black"
  obstacle5.shapeColor="black"
  obstacle6.shapeColor="black"
  obstacle7.shapeColor="black"
}

function draw() {
  background(255,255,255);  
 strokeWeight(2)
 stroke(0,90)
 
 
obstacle1.bounceOff(margin2)
obstacle1.bounceOff(margin1)
obstacle2.bounceOff(margin2)
obstacle2.bounceOff(margin1)
obstacle3.bounceOff(margin2)
obstacle3.bounceOff(margin1)
obstacle4.bounceOff(margin2)
obstacle4.bounceOff(margin1)
obstacle5.bounceOff(margin2)
obstacle5.bounceOff(margin1)
obstacle6.bounceOff(margin2)
obstacle7.bounceOff(margin1)
obstacle7.bounceOff(margin2)
obstacle6.bounceOff(margin1)

































  drawSprites();
}