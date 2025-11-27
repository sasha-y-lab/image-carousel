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

const nextBtn = document.querySelector("#next");

const previousBtn = document.querySelector("#previous");

const imagesArray = [img1, img2, img3];

// there must be an easier way to switch forward then backward
// without needing exact numbers

previousBtn.addEventListener("mousedown", (e) => {

    console.log(e.target); // yup it is clicked

  // here's where the slide moves
  // previous moves backwards or scrolls backwards
//console.log(photosDiv.length);
 //photosDiv.forEach
//if (e.target) {
//let positionX = 350;




for (let i = 0; i < imagesArray.length; i++) {

console.log(imagesArray[i]);

slider.translate = "350px";

//slider.style.transform = `translateX(${imagesArray[1]})`;

//alert(imagesArray[i]);

}

});



//const speed = 2;

//positionX += speed;
   
   // slider.style.transform = `translateX(${positionX}px)`;
 //console.log(positionX);

  //  if (positionX === 350) {
       // positionX = 100;
//slider.style.transform = `translateX(${positionX}px)`;
    //positionX = 250; 
    //console.log(positionX);
//if (positionX === 250){
   // slider.style.transform = `translateX(${positionX}px)`;
//}

 // }

 // if (positionX === 3) {
  // slider.style.transform = "translateX(50px)";
  // positionX = 4;
  // console.log(positionX);
  //}


  //requestAnimationFrame(animateMovement);
    //slider.style.transform = "translateX(-316px)";
    
     //slider.style.transform = "translate(50px)";
    //img1.style.transform = "translate(300px)";
  //  img2.style.transform = "translate(300px)";
   // img3.style.transform = "translate(300px)";

 //}
//animateMovement(slider);





nextBtn.addEventListener("mousedown", (e) => {

    console.log(e.target); // yup it is clicked
//console.log(slider);
//console.log(slider.style.transform);
  // here's where the slide moves
  // next moves forwards or scrolls forwards

   for (let k = 0 ; k < imagesArray.length; k++) {

console.log(imagesArray[k]);

   }

  //  if (photosDiv.length === 3) {

   //     for (let i = 0; i <= photosDiv.length; i++) {
   // slider.style.transform = "translateX(-316px)";
   // i++;

   // slider.style.transform = "translateX(-316px)";
      //  }

   // }


   // img1.style.transform = "translate(-300px)";
   // img2.style.transform = "translate(-300px)";
   // img3.style.transform = "translate(-300px)";

    //photosDiv.style.transform = "translate(-300px)";

  //}


});