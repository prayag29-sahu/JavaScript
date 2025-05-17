class user {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("Name :",this.name); 
        console.log("Email :",this.email); 
    }
}
class admin extends user{
    editdata(){
        // super("Mohan","mohan543gmail.com");
        super.viewdata();
    }
}
let obj = new user("Ram","ram123@gmail.com");
obj.editdata();