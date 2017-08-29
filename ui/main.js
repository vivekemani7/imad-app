console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'THIS IS VIVEK';
// move image the element
var img =  document.getElementById('img');
img.onclick = function()
{
    img.style.marginLeft = '100px';
};
//var marginLeft=0;
/*function moveRight(){
    marginLeft = marginLeft + 10;
    img.stle.marginLeft = marginLeft + 'px';
}
img.oneclick = function(){
    var interval = setInterval(movieRight,100);
};*/