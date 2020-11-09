class Box extends BaseClass{
    constructor(x, y, width, height) {
      super(x,y,width,height);
      }
      display(){
        fill("purple");
        if(this.body.speed<3){
        super.display();
        }
        else{
          World.remove(world,this.body);
          push();
          image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop();
        }
      }  
  }
