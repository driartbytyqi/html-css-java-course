var input1 = document.querySelector('#input_id')
var input2 = document.querySelector('#input2_id')
var button = document.getElementById('btn_id')
var ans = document.querySelector('#answer')

button.addEventListener("click", function(){
    ans.innerHTML= parseInt(input1.value) + parseInt(input2.value)
})
 var text = "the best school in the world is digital school";
 var result = text.replace("digital school", "another school");
 console.log(result);

//  var text2 = 'abcdef';
//  var regex = newr=RegExp ('abc');
//  document,getElementById('answer').innerHTML = regex.test(text2);

var text2 = 'digitalschool is the top 10 schools';
var regex = /[0-9]/g;
document.getElementById("answer").innerHTML= text2.match(regex);