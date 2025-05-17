class base { 
    constructor(){
        console.log("the costructor of class ");
    }
    show(){
        console.log("its a base class");
    }
}
class derived extends base {
    show2(){
        console.log("its a derived class");
    }
}
let obj = new derived();
obj.show();
obj.show2();
/**
the costructor of class      
its a base class    
its a derived class 
 */