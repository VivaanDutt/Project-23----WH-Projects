class Box {
    constructor (x, y, width, height) {
        var options = {density:1, friction:1, restitution:0.1};
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.height = height;
        this.width = width;
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        
        fill("red");  
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}