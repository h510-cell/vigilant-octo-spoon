class Legend {
    constructor(){
      this.index = null;
      this.name = null;
    }
    getCount(){
      var legendCountRef = database.ref('legendCount');
      legendCountRef.on("value",(data)=>{
        legendCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        legendCount: count
      });
    }
  
    update(){
      var legendIndex = "legends/legend" + this.index;
      database.ref(legendIndex).set({
        name:this.name,
      });
    }
  
    static getlegendInfo(){
      var legendInfoRef = database.ref('lengends');
     legendInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
}