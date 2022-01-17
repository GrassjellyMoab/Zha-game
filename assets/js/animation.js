// First intro text appear and disappear


function disappear() {
    var obj = document.getElementById('intro-animate');
    obj.style.visibility = 'hidden';
}   

window.onload = setTimeout(disappear, 2000);