console.log('Loaded!');
var element = document.getElementByid('main-text');
element.innerHTML = 'THIS IS VIVEK';
// move the element
var img =  document.getElementByid('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.stle.marginLeft = marginLeft + 'px';
}
img.oneclick = function(){
    var interval = setInterval(movieRight,100);
};