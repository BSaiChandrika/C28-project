class Tree{
    constructor(x,y) {
        var options = {
            isStatic: true
        }

        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.width = 550;
        this.height = 550;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        var position = this.body.position;
        push();
        translate(position.x,position.y);
        imageMode(CENTER);
        image(this.image, this.x,this.y,this.width,this.height);
        pop();
      }
}