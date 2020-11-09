class Block{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.4,
            friction:0.1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        if(this.body.speed<3){
        rect(this.body.position.x, this.body.position.y,this.width, this.height) 
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility-5;
          tint(225,this.Visibility);
          pop();
        }
      }  
        
