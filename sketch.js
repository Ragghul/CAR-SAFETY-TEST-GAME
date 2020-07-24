var car1;
var car2;
var car3;
var wall;


function setup() {
  createCanvas(1600,400);
 car1 = createSprite(40,50,30,30);
 car1.velocityX  = 4;
 car2 = createSprite(40,150,30,30);
 car2.velocityX = 2;
 car3 = createSprite(40,250,30,30);
 car3.velocityX = 3;
 
 wall = createSprite(1500,200,50,400);
 wall.shapeColor = color(80,80,80);

}
 


function draw() {
  background(0,0,0); 


  if(car1.isTouching(wall)){
    car1.shapeColor = color(225,0,0);
  }
  if(car2.isTouching(wall)){
    car2.shapeColor = color(0,225,0);
  }
  if(car3.isTouching(wall)){
    car3.shapeColor = color(230,230,0);
  }
  drawSprites();
}
