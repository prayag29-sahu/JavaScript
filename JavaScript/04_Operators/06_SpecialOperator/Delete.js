let Student = {
    name : 'Roy',
    age : 20,
}
console.log(Student); // { name: 'Roy', age: 20 }
delete Student.age;
console.log(Student); // { name: 'Roy' }

let arr = [1, 2, 3];
delete arr[1]; // index value of 1

console.log(arr); // [ 1, <1 empty item>, 3 ]
console.log(arr.length); // 3