let Student = {
    name: 'Roy',
    age: 20,
}
console.log("name" in Student); // true
console.log("rollno" in Student); // false

let user = {
    name: "Alice",
    age: 25
};

for (let key in user) {
    console.log(key + " : " + user[key]);
}
// name : Alice
// age : 25