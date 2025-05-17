function checkgrade(){
    var grade = prompt("Enter your marks : ");
    if(grade>=90&&grade<=100){
        alert("A");
    }else if(grade>=70&&grade<90){
        alert("B");
    }else if(grade>=60&&grade<70){
        alert("c");
    }else if(grade>=50&&grade<60){
        alert("D");
    }else if(grade>=0&&grade<50){
        alert("F");
    } else{
        alert("invalid marks.");
    }
}