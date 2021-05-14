var snowflake


function preload() {
  snow=loadImage("snow1.jpg")
  snow1=loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
 

  
  snowflake=createSprite(400,100,20,20)
  snowflake.addImage(snow1)
  snowflake.scale=0.1

}

function draw() {
  background(snow);  
  drawSprites();
}