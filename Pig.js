class Pig{
    constructor(x, y, width, height){
        var pig_options={
            isStatic: false,
            restitution: 0.8,
            friction: 1,
            density: 1
        }
        this.body=Bodies.rectangle(x, y, width, height, pig_options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}