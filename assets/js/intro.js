// First intro text appear and disappear
function disappear() {
    let obj = document.getElementById('intro-animate');
    obj.style.display= 'none';
}   

function fadeout() {
    let obj = document.getElementById('intro-animate');
    obj.classList.add('fade-out');
}

// let text below appear later
window.onload = setTimeout(function() {
    let obj = document.getElementById('Second');
    obj.style.visibility = 'visible'
}, 2500)

// let text ease out
window.onload = setTimeout(fadeout, 5000);
window.onload = setTimeout(disappear, 8000);


// once the intro text disappear username appears
function appear() {
    let obj = document.getElementById('username');
    obj.style.display = 'block';
}

function fadein() {
    let obj = document.getElementById('username');
    obj.classList.add('fade-in')
}

// Username event begins
window.onload = setTimeout(fadein,8500)
window.onload = setTimeout(appear,8500)


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