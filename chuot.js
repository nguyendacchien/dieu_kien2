let jmgObj = null;
function init(){
    jmgObj = document.getElementById( 'myImage');
    jmgObj.style.position ='relative';
    jmgObj.style.left= '0px';
}
function moveRight(){
    jmgObj.style.left = parseInt(jmgObj.style.left) +20 + 'px';
}
window.onload = init;
