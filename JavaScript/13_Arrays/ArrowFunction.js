// Normal Function
function sum(a,b){
    console.log(a+b);
}
sum(3,4);
// 7

// Arrow Function 
let SumOfElem = (a,b)=>{ // where a function store in a function variable SumOfElem.
    console.log(a+b);
}
SumOfElem(3,4);
// 7
SumOfElem = 5; //we again change the value of SumOfElem
console.log(SumOfElem); // 5