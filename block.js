class Block {
    constructor(a,b,c,d)
    {
        var block_options = {
            isStatic: true

        }
  this.x = a;
  this.y = b;
  this.width = c;
  this.height = d;
  this.body = Bodies.rectangle(a,b,c,d,block_options)
  World.add(world,this.body);
    }

    display()
    {
        var block_position = this.body.position;
  var angle = this.body.angle;
  push();
  translate(block_position.x,block_position.y);
  rotate(angle);
  rectMode(CENTER);
  fill("white");
  stroke("green")
  strokeWeight(4)
  rect(0,0,this.width,this.height);
  pop();
    }
}