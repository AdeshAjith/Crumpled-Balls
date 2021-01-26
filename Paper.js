class Paper{
    constructor(x,y,radius){
        var PaperOptions={
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.Paper = Bodies.circle(x,y,radius,PaperOptions)
        this.radius = radius
        this.image = loadImage("paper.png")
        World.add(world,this.Paper)
    }
    display(){
        var pos = this.Paper.position
        push ()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image, 0,0,100,100)
        if(keyWentDown("up")){
            pos.y = pos.y-20
            pos.x = pos.x+14.5
        }
        pop ()
    }
}