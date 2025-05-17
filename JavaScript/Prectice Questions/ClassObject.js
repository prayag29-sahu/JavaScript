class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Name:", this.name); 
        console.log("Email:", this.email); 
    }
}
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData(data) {
        console.log(`${this.name} is editing website data: ${data}`);
    }
}

let userObj = new User("Ram", "ram123@gmail.com");
userObj.viewData();

let adminObj = new Admin("Admin1", "admin@gmail.com");
adminObj.viewData();
adminObj.editData("New homepage content added.");
/**
Name: Ram
Email: ram123@gmail.com
Name: Admin1
Email: admin@gmail.com
Admin1 is editing website data: New homepage content added.
 */