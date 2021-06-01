  var garden,rabbit,apple;
  var gardenImg,rabbitImg,appleImg;

  function preload(){
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    appleImg = loadImage("apple.jpg");
  }

  function setup(){
    
    createCanvas(400,400);
    
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  rabbit.x = mouseX;

  function createApples() {
    apple = createSprite(random(20,320),50,10,10);

    apple.addImage("appleImg");
    apple.velocityY = -2;
    apple.scale = 0.5;
  
  }
}


  function draw() {
    background(0);
    
    edges= createEdgeSprites();
    rabbit.collide(edges);

    function createLeaves() {
      orange = createSprite(random(300,50),40,10,10);
    }

    var select_sprites = Math.round(random(1,2));

    if (frameCount%80 == 0){
      if(select_sprites == 1){

    
      }
    }
  
    drawSprites();
  }
