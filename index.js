function display(v){
    document.getElementById("result").value+=v; 
}
function clearRes(){
    document.getElementById("result").value = "";
}
function calcRes(){
    let x = document.getElementById("result").value;
    // eval : evaluates Js code represented as String  
     let y = eval(x) ;
     document.getElementById("result").value = y; 
}