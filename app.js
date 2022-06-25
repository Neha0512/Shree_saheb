
let line2= document.querySelector('.line2');
var x=0;
window.onload=function(){
    var line1= document.getElementById("line1");
    setInterval(function(){
        x++;
        line1.style.left=x;
    },10);
}