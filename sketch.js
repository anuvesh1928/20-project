var garden;
var cat,rat;
var catImg1,ratImg1;
var catImg2,ratImg2;
var catImg3,ratImg3;



function preload() {
    //load the images here
    garden = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    
    ratImg1 = loadAnimation("images/mouse1.png");
    ratImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    ratImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(800,700,100,50);
    cat.addAnimation("standing",catImg1);
    cat.scale=0.15;

    rat = createSprite(100,700,100,50);
    rat.addAnimation("ratStanding",ratImg1);
    rat.scale=0.15;
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide

    collide();
    drawSprites();
  }
  
  
  function keyPressed(){
    
    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
      rat.addAnimation("teasing",ratImg2);
      rat.changeAnimation("teasing");
      rat.frameDelay=25;
      
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      cat.velocityX=-4;
      
    }
    
    
  }
  
  function collide(){
    
    if(cat.x - rat.x < (cat.width - rat.width)/2){
      cat.addAnimation("happyCat",catImg3);
      cat.changeAnimation("happyCat");
      cat.velocityX=0;
      cat.x=200;
  
      rat.addAnimation("happyRat",ratImg3);
      rat.changeAnimation("happyRat");
    }
    
}
