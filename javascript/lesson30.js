var input = document.getElementById("input");
var button = document.getElementById("btn");
var h1 = document.getElementById("h1");

button.onclick = function(){
    if = (input.value > 10){
        h1.innerHTML = "input value is greater than 10";
    }else if(input.value < 10){
        h1.innerHTM = " input value is less than 10";
    }else{
        h1.innerHTML = "input value is equal to 10";
    }
}