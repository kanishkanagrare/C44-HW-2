var welcomeimg, welcome, board, boardimg, chit, chitimg;
var playbutton, playbuttonimg, instructions, instructionsimg;

function preload(){
welcomeimg=loadImage("welcomeScreen/welcomescreen.jpg");
playbuttonimg=loadImage("welcomeScreen/playbutton.png");
boardimg=loadImage("welcomeScreen/cluetho.png");
instructionsimg=loadImage("welcomeScreen/Instructionz.png");
chitimg=loadImage("welcomeScreen/chit.jpg");

}

function setup() {
  createCanvas(1000, 500);
  welcome=createSprite(500, 250, 1000, 500);
  welcome.addImage("welcome", welcomeimg);

  playbutton=createSprite(500, 450, 20, 20);
  playbutton.addImage("play", playbuttonimg);
  playbutton.scale=0.3;

  instructions=createSprite(500,150, 800, 125);
  instructions.addImage("ins", instructionsimg);

}


function draw() {

  if(mousePressedOver(playbutton)){
    board=createSprite(300,250,200,200);
    board.addImage("board", boardimg);
    board.scale=0.9;


    chit=createSprite(760, 214, 300, 350);
    chit.addImage("chit", chitimg);
    chit.scale=0.4;

    diceButton=createSprite(850, 450, 40, 40);
  
    pl1=createSprite(150,50,20,20);
    pl1.shapeColor='red';
  
  }
  
  drawSprites();

}
