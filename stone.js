class stone{
    constructor(x,y,width,height) {
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':1.2           
         }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage(stoneImage);

        World.add(world, this.body);
}
display(){
    var rectpos = this.body.position;
    push();
    translate(rectpos.x,rectpos.y);
    rect(0,0,this.width,this.height);
    pop();
    fill("purple");

    }
    
}