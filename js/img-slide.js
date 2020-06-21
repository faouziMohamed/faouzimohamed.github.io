let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");
  /*let prev = document.querySelectorAll(".prev");
  let next = document.querySelectorAll(".next");*/

  /*for(i=0; i<prev.length;++i){
    prev[i].addEventListener("click",()=>{plusSlides(-1);});
    next[i].addEventListener("click",()=>{plusSlides(1);});
  }

  for(i=0;i<dots.length;++i){
      dots[i].addEventListener("click",(i)=>{console.log(i);currentSlide(i+1);});
  }*/

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].classList.toggle("active");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}