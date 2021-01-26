class Rope {
    constructor(bodyA,bodyB){
    var option = {
        bodyA:bodyA,
        bodyB:bodyB,
        length:10,
        stiffnes:0.04
        
    }
    this.chain = Matter.Constraint.create(option);
    World.add(world,this.chain);
    
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
    strokeWeight(4)
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    
    
    
    
    
    }
    }