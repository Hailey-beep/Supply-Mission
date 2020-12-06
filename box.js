class Box  {
    
    constructor (x,y,width,height) {

        var move = {isStatic:true}
        
        this.body = Bodies.rectangle(x,y,width,height,move)
        this.width = width
        this.height = height
        World.add(world, this.body)
    }

    display() {
        
        var pos = this.body.position;

        push()
        rectMode(CENTER)
        fill("red")
        stroke("red")
        rect(pos.x, pos.y, this.width, this.height)
        pop()
    }
}