// //var button1= document.querySelector("button")

// //button1.addEventListener('click',function(){
//   //  alert('hello world');
// //})

// // var button2 = document.getElementById('btn1')
// var button3 = document.getElementById('btn2');
// var button4 = document.getElementById('btn3');
// var v_button = document.getElementById('button1');
// var v_text = document.getElementById('txt1');

// v_button.onclick = function(){
//     // v_text.style.color="red";
//     // v_text.style.textAlign.backgroundcolor = "lightgrey";
//     // v_text.style.textAlign = "center";
//     // v_text.style.fontSize= "100px";
//     // v_text.style.padding= "200px";
//     v_text.setAttribute("class","test");
// }
// v_text.onmouseover=function(){
//     v_text.style.cssText = "color : red;backround-color : lightblue; text-align: center; font-size: 100px; padding: 20px;"
// }

// button2.onmouseover = function(){
//     alert('over')
// }
// button3.onmouseover = function(){
//     alert('leave')
// }
// button4.onmouseover = function(){
//     alert('wheel')
// }
var btn_circle=document.getElementById("btncircle")
var btn_rectangle=document.getElementById("btnrectangle")
var btn_triangle=document.getElementById("btntriangle")

var btn_circle =document.getElementById("circle")
var btn_rect =document.getElementById("rec")
var btn_triangle =document.getElementById("triangle")

btn_circle  .onclick(){
    btn_circle.setAttribute("class","shape_class")
}

btn_rect.onclick(){
    btn_rect.setAttribute("class","shape_class")
}

btn_triangle.onclick(){
    btn_triangle.setAttribute("class","shape_class")
}    