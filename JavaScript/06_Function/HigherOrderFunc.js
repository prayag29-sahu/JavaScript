function greeting(){
    console.log("Hello, Roy");
}
    function higher_order_func(call_back){
        console.log("Before the call_back");
        call_back();
        console.log("After the call back");
    }
    higher_order_func(greeting);

/**
Before the call_back
Hello, Roy
After the call back
 */

