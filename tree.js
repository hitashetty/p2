class tree{
    constructor(x,y,width,height) {
        var options = {
            isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0           
         }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage(treeImage);

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