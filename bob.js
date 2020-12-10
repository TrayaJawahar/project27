class Bob {
    constructor(x, y, radius) {
      var options = {
        isStatic:true,
          'restitution':0.3,
          'friction':1,
          'density':3.5,
          }
      this.body = Bodies.circle(x, y,10, options); 
      World.add(world, this.body);
        }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      ellipse(0, 0, this.width, this.height);
     fill("white");
      pop();  
    }
  }
  