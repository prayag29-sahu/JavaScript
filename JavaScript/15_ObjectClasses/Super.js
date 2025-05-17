class Parent {
    constructor(name) {
        this.name = name;
        console.log(name);
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name); // calls Parent constructor
        this.age = age;
        console.log(name,age);
    }
}
let obj = new Child("Parent",35);
/**
Parent
Parent 35
 */