// var slide index=1;
// function showslides(n){
//     var i;
//     var slides=document.getElementsByClassName.apply('slide')
//     for(i=0;i<slides.length;i++){
//         slides[i].style.display='none';
//     }
//     if(n > slides.length){
//         slideindex = 1;
//     }
//     if(n < 1){
//     slideindex = slides.length;
//     }
//     slides[slideindex-1].style.display ='block';
// }

// function plusslide(n){
//     slideindex +=n;
//     showslides(slideindex);
// }
// showslides(1);

// function search(){
//     var input, filter, ul, li ,a,i,textvalue;
//     input = document.getElementById('myinput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById('mylist');
//     li = ul.getElementsByTagName('li');
//     for(i = 0; i < li.length; i++){
//         a= li[i];
//         textvalue = a.textContent ;
//         if(textvalue.toUpperCase().indexOf(filter) > -1){
//             li[i].style.display = 'block';
//         }else{
//             li[i].style.display = 'none';
//         }
// }}
function openmenu(){
    var menu = document.getElementById('mylinks');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
}