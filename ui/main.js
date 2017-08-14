console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New change";
var img = document.getElementById("madi");
var mRight = 1;
function moveRight() {
    mRight = mRight + 10;
    img.style.marginLeft = mRight + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
    //img.style.marginLeft = mLeft + 'px';
};