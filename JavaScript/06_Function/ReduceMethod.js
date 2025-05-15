let arr = [2,4,2,5,8,6,2,0];
let greater = arr.reduce((res,curr)=>{
    return res>curr?res:curr;
})
console.log(greater);
// 8

let sum = arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(sum);
// 29