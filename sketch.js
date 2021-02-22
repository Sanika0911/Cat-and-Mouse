var cat, mouse,garden;
var catImg, mouseImg, gardenImg;
var cat_walk, mouse_hi, cat_sit, mouse_sit;
var distanceX;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg=loadImage("images/cat1.png");
    mouseImg=loadImage("images/mouse1.png");
    cat_walk=loadAnimation("images/cat3.png","images/cat2.png");
    mouse_hi=loadAnimation("images/mouse3.png","images/mouse2.png");
    cat_sit=loadAnimation("images/cat4.png");
    mouse_sit=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(787,700);
    //create tom and jerry sprites here
    garden=createSprite(300,350,10,10);
    garden.addImage(gardenImg);

    cat=createSprite(600,500);
    cat.addImage(catImg);
    cat.addAnimation("walking", cat_walk);
    cat.addAnimation("cSit",cat_sit)
    cat.scale=0.1;
    
    mouse=createSprite(100,500);
    mouse.addImage(mouseImg);
    mouse.addAnimation("hi", mouse_hi);
    mouse.addAnimation("mSit",mouse_sit);
    mouse.scale=0.1;

 console.log (distanceX = mouse.width / 2 + cat.width / 2);
}

function draw() {
    background("black");

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width) / 2) 
   {
    cat.changeAnimation("cSit",cat_sit);
    mouse.changeAnimation("mSit",mouse_sit);
    cat.velocityX = 0;
    cat.x=160;

    }

    else{
        cat.addImage(catImg);
        mouse.addImage(mouseImg);
       }

    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){
   cat.velocityX = -4;
   cat.changeAnimation("walking",cat_walk);
   mouse.changeAnimation("hi",mouse_hi);
  }
}