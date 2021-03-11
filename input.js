let input = {
    down:{},
    init(){
       window.addEventListener("keydown", (e)=>{
         this.down[e.code] = true;
       }) 
       window.addEventListener("keyup", (e)=>{
        delete this.down[e.code];
      }) 
    }, 

    update(gameObj){
        let mario = gameObj.entities.mario;

        if(this.isDown("ArrowLeft")){
           mario.posX-=mario.velX; 
        }

        if(this.isDown("ArrowRight")){
            mario.posX+=mario.velX;
        }
    }, 

    isDown(key){
        return this.down[key];
    }
}