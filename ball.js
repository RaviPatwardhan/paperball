class Ball {
    constructor(x, y,width,hieght, angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 100, 100, options);
      this.height=100;
      this.width=100;
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     image(this.image,0,0,this.width,this.height);
      pop();
    }
  };
  