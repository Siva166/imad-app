console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New change";
var img = document.getElementById("madi");
var moveRight = 1;
img.onclick = function(){
    moveRight = moveRight + 1;
    var interval = setInterval(moveRight, 100);
    //img.style.marginLeft = mLeft + 'px';
};