class SlingShot{
    constructor(bodyA,bodyB){
      var options={
       bodyA:bodyA,
       bodyB:bodyB,  
       stifness:0.04,
       length:10
}
    this.lengend=loadImage("images/lengend1.png");
    this.ball=loadImage("images/BaseketBal.png");
    this.bodyB=bodyB
    this.lengend=Constraint.create(options);
    World.add(world,this.lengend);    
}
   attach(body){
       this.lengend.bodyA=body;

   }
   fly(){
       this.lengend.bodyA=null;
   }
     display(){
         image(this.lengend,600,590);
         image(this.ball,620,590);
     }
}
