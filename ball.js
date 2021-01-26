class Ball{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y,70, options);
        this.radius = 70;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse( 0, 0, 70,70);
        pop();
      }
}