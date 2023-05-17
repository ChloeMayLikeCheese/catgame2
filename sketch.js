var cat
var backgroundFruit
var catImg
var backGroundImg
var background
var fruit
var score = 0

function preload (){
   catImg = loadImage ("cat.png")
   backGroundImg = loadImage ("background.jpg")
 backgroundFruitImg = loadImage ("fruit2.png")
     fruitImg = loadImage ("fruit.png")
}
function setup(){

    createCanvas(windowWidth,windowHeight)
    
    cat = createSprite(250,455,50,50)
    

    
   cat.addImage ("cat",catImg)
   for (var i = 0 ;i < 30 ; i ++){
    backgroundFruit = createSprite(random(10,windowWidth - 200),random (130,windowHeight - 600 ),30,30)
    backgroundFruit.addImage ("backGroundFruit",backgroundFruitImg)
    backgroundFruit.scale = 0.2
    
   }
   for (var i = 0 ;i < 20 ; i ++){
    fruit = createSprite(random(10,windowWidth - 200),random (130,windowHeight - 600 ),30,30)
    fruit.addImage ("fruit  ",fruitImg)
    fruit.scale = 0.2
 
    
   }

   
}

function draw(){

    background(backGroundImg)
    textSize (50)
    text ("Score  "+  score,100,50)
 
if(keyDown(LEFT_ARROW)){
    cat.x = cat.x - 100
  

}
drop ()
if(keyDown(RIGHT_ARROW)){
    cat.x = cat.x + 100  

}
if (cat.collide(fruit)) {
    fruit.destroy()
}
    drawSprites()
}
function drop (){
    if (frameCount%40 === 0) {
        fruit = createSprite(random(10,windowWidth - 200),random (130,windowHeight - 600 ),30,30)
    // fruit.shapeColor = "green"
    fruit.velocityY = 10
    fruit.addImage ("fruit  ",fruitImg)
    fruit.scale = 0.2
    }
}


