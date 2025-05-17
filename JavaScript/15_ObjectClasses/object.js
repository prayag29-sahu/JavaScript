let student = {
    name : "object",
    marks : 75,
    printmarks : function (){
        console.log("marks = ",this.marks);
    },
};
// console.log(student.marks); // 75
console.log(student.printmarks()); 
/**
marks =  75
undefined
 */