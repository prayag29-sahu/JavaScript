let arr = [1,2,3,4,5];
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
})
/**
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]
 */
let arr1 = [1,2,3,4,5];
let sum=0;
arr1.forEach((val)=>{
    sum=sum+val;
})
console.log(sum);
// 15