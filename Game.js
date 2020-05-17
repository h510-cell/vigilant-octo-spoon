class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 1){
        legend = new Legend();
        var legendsCountRef = await database.ref('legndsCount').once("value");
        if(legendsCountRef.exists()){
          legendsCount = legendsCountRef.val();
          legends.getCount();
        }
        form = new Form()
        form.display();
      }
  
      legend1 = createSprite(600,590);
      legend1.addImage("legend1",legend1_img);
      legend2 = createSprite(570,570); 
      legend2.addImage("legend2",legend2_img);
      legend3 = createSprite(600,610);
      legend3.addImage("legend3",legend3_img);
      legend4 = createSprite(630,630);
      legend4.addImage("legend4",legend4_img);
      legends = [legend1, legend2,legend3,legend4];
      refree = createSprite(600,600);
      refree.addImage("refree",refree_img);
      Ring = createSprite(1100,600);
      Ring.addImage("Ring",Ring_img);
      Ring1 = createSprite(180,600);
      Ring1.addImage("Ring1",Ring1_img);
      basketball=createSprite(620,590);
      basketball.addImage("basketball",basketball_img);
    }
  
    play(){
      form.hide();
      
      legends.getLegendInfo();
      
      
      if(allPlayers !== undefined){
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the legends
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the legends a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the legends in y direction
          y = displayHeight - allPlayers[plr].distance;
          legends[index-1].x = x;
          legends[index-1].y = y;
         // console.log(index, legend.index)
  
         
          if (index === legend.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            legends[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = legends[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
      if(keyIsDown(UP_ARROW) && legend.index !== null){
        legends.distance +=10
        legends.update();
      }
         legend3.x=random(0,1200);
         legend4.x=random(0,1200);      
      drawSprites();
    }
  }