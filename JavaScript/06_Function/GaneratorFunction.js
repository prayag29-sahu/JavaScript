function* numsequ(){
    let num = 1;
    while(true){
        yield num;
        num++;
    }
}
let gen = numsequ();

console.log(gen.next().value); // 1
console.log(gen.next().value); //  returns 2
console.log(gen.next().value); //  returns 3

/**
1
2
3
 */