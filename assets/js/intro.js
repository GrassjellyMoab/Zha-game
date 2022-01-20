// First intro text appear and disappear
function disappear() {
    var obj = document.getElementById('intro-animate');
    obj.style.display= 'none';
}   

function fadeout() {
    let obj = document.getElementById('intro-animate');
    obj.classList.add('fade-out');
}
// let text ease out
window.onload = setTimeout(fadeout, 2500);
window.onload = setTimeout(disappear, 5500);


// once the intro text disappear username appears
function appear() {
    var obj = document.getElementById('username');
    obj.style.display = 'block';
}

function fadein() {
    let obj = document.getElementById('username');
    obj.classList.add('fade-in')
}

// Username event begins
window.onload = setTimeout(fadein,5500)
window.onload = setTimeout(appear,5500)


// document.documentElement.style.display = 'block';
// // Jquery
// $(function() {
//     console.log('in');
//     if(!$('#intro-animate').is(':visible'))
//             {
//                 console.log('in2');
//                 $('#username').css({'display': 'block'});
//             }
    
// });