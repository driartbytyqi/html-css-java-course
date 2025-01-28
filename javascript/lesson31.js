// // var person = { firstName: "michal",lastName:"jordan", age:60};
// var text= '';
// var x;
// for(x in person){
//     text += person[x];
// }
// console.log(text);
// 
var students = ["eris","ledri","lisa"];
var names_input = document.getElementById('name_input');
var btnadd = document.getElementById('btnadd')
btnadd.onclick = function(){
    students.push(names_input.value);
}
btnshow.onclick = function(){
    for(i=0; i<students.length; i++){
        document.write(students[i]+ "<br>");
    }
    
}
