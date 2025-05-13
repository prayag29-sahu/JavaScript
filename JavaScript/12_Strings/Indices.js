let str = "Hello World";
for(let i=0;i<str.length;i++){
    process.stdout.write(str[i]+" ");
}
// H e l l o   W o r l d 
console.log();

for(let val of str){
    process.stdout.write(val+" ");
}
// H e l l o   W o r l d 