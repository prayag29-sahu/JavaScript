let employee = {
    caltax(){
        console.log("tax rate is 10%");
    },
};

let Rahul = {
    salary : 20000,
};
Rahul.__proto__= employee;
console.log(Rahul.caltax); // view in console