function display(value){
    document.getElementById("result").value += value;
}
function clearscreen(value){
    document.getElementById("result").value="";
}
function caluculate(){
    if( document.getElementById("result").value==""){
        alert("Please Enter the Values");
    }
    else{
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
    }
}