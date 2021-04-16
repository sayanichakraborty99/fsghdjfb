
var fixect;
var movect;
var gameobject1;
var gameobject2;
var gameobject3;
var gameobject4;


function setup() {
  createCanvas(800,400);

  var gameobject1 = createSprite(100,100,20,30);

  var gameobject2 = createSprite(127,100,20,21);
  gameobject2.shapeColor = 'black';

  var gameobject3 = createSprite(100,158,20,20);
  gameobject3.shapeColor = 'purple';

  var gameobject4 = createSprite(55,100,22,62);
  gameobject4.shapeColor = 'pink';

  
  fixect = createSprite(200, 200, 50, 70);
  movect = createSprite(270, 270, 50, 90);
}

function draw() {
  background('yellow');  
  
  movect.x = World.mouseX;
  movect.y = World.mouseY;

  if(isTouching(movect,gameobject1)){
    movect.shapeColor = "green";
    gameobject1.shapeColor = "green";
  }
  else {
    movect.shapeColor = "red";
    gameobject1.shapeColor = "red";
  }
 
 drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}
