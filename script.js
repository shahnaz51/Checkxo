// HERO SLIDER

const slides = document.querySelectorAll(".hero-slide");
let current = 0;

setInterval(() => {

slides[current].classList.remove("active");

current = (current + 1) % slides.length;

slides[current].classList.add("active");

},4000);



// SCROLL REVEAL

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{threshold:0.2});


document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});