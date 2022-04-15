//ES6
class dog{
   
    constructor(color, size){
        this.color = color;
        this.size = size;
        this.name = "boby";
    }

    ladrar(){
        console.log("uff uff uff");
    }
    
}

class caniche extends dog{
    constructor(color,size, origem){
        super(color,size, name);
        this.origem = origem;
    }
    ladrar(){
        super.ladrar();
        console.log("mas baixinho do nome " + this.name);
    }
}