let c = 4; // 0100
let d = 7; // 0111
let e = c|d; // 0100|0111 = 0100 = 4
console.log(c); // o/p 4




let a = 4;
let b = 7;
if((a&1)===0){// it check bitwise 4 = 0100 at the end a&1===0 means even 0r if a&1===1 means odd
    console.log('Even');
}else{
    console.log('Odd')
}
// Even

if((b&1)===1){
    console.log('Odd'); // 7 = 0111 
}else{
    console.log('Even')
}
// Odd

