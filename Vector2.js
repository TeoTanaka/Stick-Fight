class Vector2{

    constructor(x,y){
        this.x = x;
        this.y = y
    }

    copy(){
        return new Vector2(this.x,this.y)
    }
    mag(){
        return Math.sqrt(Math.pow(this.x,2),Math.pow(this.y,2))
    }
    mul(scalar){
        return new Vector2(this.x*scalar,this.y*scalar)
    }
}