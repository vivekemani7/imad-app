var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
  // rendered the variable in the correct span
  counter = counter+1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
  
};