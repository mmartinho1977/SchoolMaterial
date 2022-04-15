var dogObj = {
    name : "boby",
    size: "medio",
    color:"castanho",

    bark : function(){
        console.log("wof wof do cao " + this.name);
    }
}

class dog{

    constructor( size, color){
        this.name =  "bobi";
        this.size = size;
        this.color = color;
    }


    bark() {
        console.log("wof wof do cao " + this.name);
    }
}

class caniche extends dog{
    constructor(size, color,local){
        super(size,color);
        this.local = local
    }

    bark(){
        super.bark();
        console.log("é de " + this.local);
    }
}