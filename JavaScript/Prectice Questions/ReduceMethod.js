function array() {
    var num = prompt("Enter any number : ");
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = i + 1;
    }
    console.log(arr);
}
function sum(){
    var num = prompt("Enter any number : ");
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = i + 1;
    }
    let sum = arr.reduce((res,curr)=>{
        return res+curr; 
    })
    console.log(sum);
}
function product(){
    var num = prompt("Enter any number : ");
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = i + 1;
    }
    let sum = arr.reduce((res,curr)=>{
        return res*curr; 
    })
    console.log(sum);
}