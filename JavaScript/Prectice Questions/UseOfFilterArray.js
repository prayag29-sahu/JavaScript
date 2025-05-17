let marks = [34,93,76,90,56,98,21,75];
let toppers = marks.filter((val)=>{
    return val>90;
})
console.log(toppers);
// [ 93, 98 ]