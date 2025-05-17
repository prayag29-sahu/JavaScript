let n = 12;
function guess(){
    var num = prompt("Enter any number : ");
    while(num!=n){
        num = prompt("Again Enter any number : ");
    }
    alert("Congratulations right guess.");
    
}