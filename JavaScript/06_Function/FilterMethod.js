let arr = [1,2,3,4,5,6,7,8];
let even = arr.filter((val)=>{
    return val%2===0;
})
console.log(even);
// [ 2, 4, 6, 8 ]

let odd = arr.filter((val)=>{
    return val%2!==0;
})
console.log(odd);
// [ 1, 3, 5, 7 ]