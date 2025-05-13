let arr = [1,2,3,4,5,6,7];
arr.splice(2,4,8,9);
// 2 = startindex, 4 2to6 element delete 8,9 add after 2nd pos 
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
/**
1
2
8
9
7
 */