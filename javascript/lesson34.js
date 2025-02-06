// function printname(){
//     document.write("john doe");
//     document.write("<br>");
//     setTimeout(function(){document.write("ana");},2000);
//     document.write("bob");
// }
// printname();

 var colors = ['red','green','blue','purple'];
 var names = ['john','ana','bob','mark'];

 function changebgcolors(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
 }
 function changenames(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)];
}
setInterval(changebgcolors,1000);
setInterval(changenames,1000);