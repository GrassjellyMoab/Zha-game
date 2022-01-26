// // inputed username
// function usernamecheck() {
//     var username = document.getElementById('userinput').value;
//     let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
//     // no special characters
//     if (format.test(username)){
//         document.getElementById('error').style.display = 'block';
//         return;
//     }
//     else {
//         document.getElementById('error').style.display = 'none';
//     }
// }

/*-Left-hand-*/
var slideIndexLeft = 1;
showSlidesLeft(slideIndexLeft);

function plusSlidesLeft(n) {
  showSlidesLeft(slideIndexLeft += n);
}

function currentSlideLeft(n) {
  showSlidesLeft(slideIndexLeft = n);
}

function showSlidesLeft(n) {
  console.log("in");  
  let i;
  let slides = document.getElementsByClassName("myslides1");
  // 
  if (n > slides.length) {slideIndexLeft = 1}    
  // if press left button
  if (n < 1) {slideIndexLeft = slides.length}
  // make all slides display='none'
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndexLeft-1].style.display = "block";  
}

/*-Right Hand--*/
var slideIndexRight = 1;
showSlidesRight(slideIndexRight);

function plusSlidesRight(n) {
  showSlidesRight(slideIndexRight += n);
}

function currentSlideRight(n) {
  showSlidesRight(slideIndexRight = n);
}

function showSlidesRight(n) { 
  let i;
  let slides = document.getElementsByClassName("myslides2");
  if (n > slides.length) {slideIndexRight = 1}    
  if (n < 1) {slideIndexRight = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndexRight-1].style.display = "flex";  
}


