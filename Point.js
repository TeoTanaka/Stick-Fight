class Point extends Vector2{
    constructor(x,y,mass){
        super(x,y)
        this.mass = mass
    }

    update(dt){
        this.render()
    }
    render(){
        fill(255)
        ellipse(this.x,this.y,5,5)

    }




}