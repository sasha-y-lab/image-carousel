// build functions for “next” and “previous” which will advance to 
// the next or previous slide accordingly. The transition doesn’t 
// need to be smooth or animated. Only make it switch to the correct 
// slide.

// Set up arrow buttons which activate those functions and play with 
// cycling through the images.

//PSEUDO CODE
// GET name of next and previous divs and photos position
// INCREMENT by 1 on next button click to each photo
// Decrement by 1 on previous button click on each photo

const slider = document.getElementById("slider");

//const photosDiv = document.querySelectorAll(".photo-div");

const img1 = document.querySelector(".image-1");

const img2 = document.querySelector(".image-2");

const img3 = document.querySelector(".image-3");
// slider buttons next and previous needs to push to each 
// photo, 1, 2, 3 or forward then backward

const circlesDiv = document.querySelectorAll(".circle-divs");

const circle1 = document.querySelector(".img-1");
const circle2 = document.querySelector(".img-2");
const circle3 = document.querySelector(".img-3");

const nextBtn = document.querySelector("#next");

const previousBtn = document.querySelector("#previous");

const imagesArray = [img1, img2, img3];

const STEP = 50;

const STEP2 = -50;

let x = 0;

// there must be an easier way to switch forward then backward
// without needing exact numbers - done



previousBtn.addEventListener("mousedown", (e) => {

    console.log(e.target); // yup it is clicked

  // here's where the slide moves
  // previous moves backwards or scrolls backwards


  x += STEP;

  slider.style.transform = `translateX(${x}px)`;




});




nextBtn.addEventListener("mousedown", (e) => {

    console.log(e.target); // yup it is clicked
//console.log(slider);
//console.log(slider.style.transform);
  // here's where the slide moves
  // next moves forwards or scrolls forwards
    
   x += STEP2;

  slider.style.transform = `translateX(${x}px)`;

});


// Add in some navigation dots at the bottom of the slides. - done
// Make a horizontal series of empty circles with CSS immediately 
// below the slideshow. Each circle represents a slide, so whenever
//  a new slide is activated, its corresponding circle gets filled 
// in so you can tell where in the show you are. Make each circle 
// link to that particular slide, so you can click on the circle and
//  it will jump to that slide.

//circlesDiv.forEach((circle, index) => {

  //let index = 0;

  //x = 340;

/* circle1.addEventListener("mousedown", (e) => {



 console.log(e.target);
// if click on circle one, show picture 1 - how do i show picture one
// slider needs to move to pic 1
slider.style.transform = `translateX(${x}px)`;



});


circle2.addEventListener("mousedown", (e) => {

x = -5;

 console.log(e.target);
// if click on circle one, show picture 1 - how do i show picture one
// slider needs to move to pic 1
slider.style.transform = `translateX(${x}px)`;



});

circle3.addEventListener("mousedown", (e) => {

  x = -40;


 console.log(e.target);
// if click on circle one, show picture 1 - how do i show picture one
// slider needs to move to pic 1
slider.style.transform = `translateX(${x}px)`;



});


*/

// ---- CIRCLES ---- //
circle1.addEventListener("mousedown", (e) => {
  console.log(e.target);
  x = 340;  // center first image
  slider.style.transform = `translateX(${x}px)`;
});

circle2.addEventListener("mousedown", (e) => {
  console.log(e.target);
  x = -5;  // center second image
  slider.style.transform = `translateX(${x}px)`;
});

circle3.addEventListener("mousedown", (e) => {
  console.log(e.target);
  x = -315;  // center third image
  slider.style.transform = `translateX(${x}px)`;
});
  
// goes from side to side and clickable on navigation buttons

// Add a timeout which advances the slides every 5 seconds.

let slideIndex = 0;
const slidePositions = [340, -5, -315]; // centered offsets for images
const intervalTime = 5000; // 5 seconds

function rotateSlides() {
  // update slider position
  x = slidePositions[slideIndex];
  slider.style.transform = `translateX(${x}px)`;

  // move to next slide
  slideIndex++;
  if (slideIndex > 2) slideIndex = 0;
}

// start rotation
setInterval(rotateSlides, intervalTime);
