class Bird{
    constructor(x, y, width, height){
        var bird_options={
            isStatic: false,
            restitution: 0.8,
            friction: 1,
            density: 1
        }
        this.body=Bodies.rectangle(x, y, width, height, bird_options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var angle=this.body.angle;
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(5);
        stroke("blue");
        rect(0, 0, this.width, this.height);
        pop();
    }
}
