console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'Vinod Vishal Vivek';
// move image the element
var img =  document.getElementById('madi');

var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.stle.marginLeft = marginLeft + 'px';
}
img.oneclick = function(){
    var interval = setInterval(movieRight,100);
};