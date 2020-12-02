class box 
{
    constructor(x, y, width, height)
    {
        this.shape = Bodies.rectangle(x, y, width, height, {isStatic: true});
        this.width = width;
        this.height = height;
        World.add(world, this.shape);
    }

    display()
    {
        var pos = this.shape.position
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
    }
}