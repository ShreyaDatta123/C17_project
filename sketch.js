var head;
var neck;
var body;
var leg;
var hand;


function setup() {
  createCanvas(800,400);
  head = createSprite(200,380,50,50);
  body = createSprite(200,300,50,100);
  neck = createSprite(200,230,5,60);
  leg = createSprite(100,370,5,60);
  hand = createSprite(200,270,200,5);
}

function draw() {
  background("cyan");  
  
  textSize(40);
  text("Puppet Show!",200,100);

  head.x = mouseX;
  body.x = mouseX;
  neck.x = mouseX;
  leg.x = mouseX;
  hand.x = mouseX;

  if(mouseIsPressed) {
    head.y = 210;
    hand.width = hand.width/2;
  }
  else {
    head.y = 180;
    hand.width = 150;
  }
   
   drawSprites();
}