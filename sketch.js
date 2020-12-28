var fixedRect, movingRect, test1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  test1 = createSprite(600,400,20,40);
test1.shapeColor = "red";

  
}

function draw() {
  background(0,0,0);  

  movingRect.x = mouseX
  movingRect.y = mouseY

if (isTouching(movingRect, test1)){
  movingRect.shapeColor = "blue"
  test1.shapeColor = "blue"
}
else{
  movingRect.shapeColor = "green"
  test1.shapeColor = "red"
}

  
  drawSprites();
}

function isTouching(object1, object2){
  
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2 
   && object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  
  return true;
}

else{

  return false;
}

}