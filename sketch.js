
var fixedRect,movingRect, Edges;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(200, 100, 30, 50);
 fixedRect.shapeColor = "yellow";
 movingRect = createSprite(750,100,50,30);
 movingRect.shapeColor = "yellow";
 movingRect.debug = true;

 Edges = createEdgeSprites();
 
  movingRect.velocityX = -3;
  fixedRect.velocityX = +3;

 console.log("welcome");
}

function draw() {
  background(0);  

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  
    movingRect.bounceOff(Edges);
    fixedRect.bounceOff(Edges);

  if((movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 )&& 
  (movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)&& 
  (fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)&&
  (fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)){
      movingRect.shapeColor = "blue";
      fixedRect.shapeColor = "blue";

     

    
  }
  else{
        movingRect.shapeColor = "yellow";
        fixedRect.shapeColor = "yellow";
      }

    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }

    

  drawSprites();
}
