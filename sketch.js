var canvas,backgoundImg;
var  lengend,lengend1,lengend2;
var gameState=0;
var gameState="onlegend"
var legendCount;
var backgoundImg;
var allplayers;
var database;

var bg="images/bg1.png";

var form,lengend,game;
var score=3;
function preload(){
    getbackgoundImg()
}
function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    game= new Game();
    game.getstate();
    game.start();
    
}

function draw(){
    if (backgoundImg)
        backgound(backgoundImg);
    if(legendCount===2){
        game.update(1);
}
    if (gameState===1){
    clear();
    game.play();
}
text("Score "+score,width-300,200);
}
function mouseDraaged(){
    //if (gameState!=="onlegend"){
        Matter.Body.setposition(ball.body,{x:mousex,y:mouseY});
        //}
}
function mouseReleased(){
    lengend.shoot();
    gameState="onlegend";
}
function keyPressed(){
    if(keyCode===32){
        ball.trajectory=[];
        Matter.Body.setAngle(ball.body,{x:620,y:590});
        lengend.attach(ball.body);
    }
}
async function getbackgoundImg(){
    var response=await fetch("http://worldtimeapi.org/api/yimezone/Asia/Kolkata");
    var responseJson=await response.json();

    var datetime=responseJson.datetime;
    var hour=datetime.slice(11,13);

    if(hour>=0660&&hour<=1900){
        bg="images/bg1.png";
    }
    else{
        bg="images/bg2.png";
    }

    backgoundImg=loadImage(bg);
    console.log(backgroundImg);   
}