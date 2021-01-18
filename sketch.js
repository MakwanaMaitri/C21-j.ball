var canvas;
var music;
var surface1, surface2, surface3, surface4;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1 = createSprite(650,580,150,20);
    surface1.shapeColor = ("white");
    surface2 = createSprite(450,580,150,20);
    surface2.shapeColor = ("yellow");
    surface3 = createSprite(250,580,150,20);
    surface3.shapeColor = ("red");
    surface4 = createSprite(50,580,150,20);
    surface4.shapeColor = ("blue");




    //create box sprite and give velocity

    ball = createSprite(60,20,40,40);
    ball.shapeColor = "white";
    ball.velocityX = 2;
    ball.velocityY = 6;
}

function draw() {
    background(0);
    //create edgeSprite
    
    if(surface2.isTouching(ball)) {
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        music.stop();
    }


    //add condition to check if box touching surface and make it box

    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = "green";
    }
    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.velocityX = 4;
        ball.velocityY = 8;
        ball.shapeColor = "green";
    }
    
    
    
    
 
    drawSprites();
}
