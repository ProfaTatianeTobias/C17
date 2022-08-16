class Box 
{
    //características ou propriedades
    constructor(){
        this.x = 100;
        this.y = 200;
        this.w = 50;
        this.h = 50;
    }
    //funções ou método
    show(){
        rect(this.x,this.y,this.w,this.h);
    }

    set_speed(v){
        this.x = this.x + v;
    }

    //set_speed(4){
      //  this.x = this.x + 4;
    //}

}