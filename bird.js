class Bird {
    constructor(a,b,c,d)
    {
        var bird_options = {
            isStatic: true

        }
  this.x = a;
  this.y = b;
  this.width = c;
  this.height = d;
  this.body = Bodies.rectangle(a,b,c,d,bird_options)
  World.add(world,this.body);
    }

    display()
    {
        var bird_position = this.body.position;
  var angle = this.body.angle;
  push();
  translate(bird_position.x,bird_position.y);
  rotate(angle);
  rectMode(CENTER);
  fill("red");
  stroke("blue")
  strokeWeight(5)
  rect(0,0,this.width,this.height);
  pop();
    }
}