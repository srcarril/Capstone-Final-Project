// MODAL/DIOLOGE BOX
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal)
  })
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  })
});

function openModal(modal){
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal){
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
function overlayToggle(){
  overlay.classList.toggle('active');
}

var slideIndex = 1;

showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log(slideIndex)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("dialogueContainer");
  
    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length-1; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "flex";
}
// Character Dialouge
function playSound(audio){
  console.log("button clicked")
  var newAudio = new Audio(audio)
  newAudio.play();
}



// // IMG Sequence
// // define images
// var images = [
//   "assets/gifLayers/potfalling_0039_Layer-1.png",
//   "assets/gifLayers/potfalling_0039_Layer-2.png",
//   "assets/gifLayers/potfalling_0039_Layer-3.png",
//   "assets/gifLayers/potfalling_0039_Layer-4.png",
//   "assets/gifLayers/potfalling_0039_Layer-5.png",
//   "assets/gifLayers/potfalling_0039_Layer-6.png",
//   "assets/gifLayers/potfalling_0039_Layer-7.png",
//   "assets/gifLayers/potfalling_0039_Layer-8.png",
//   "assets/gifLayers/potfalling_0039_Layer-9.png",
//   "assets/gifLayers/potfalling_0039_Layer-10.png",
//   "assets/gifLayers/potfalling_0039_Layer-11.png",
//   "assets/gifLayers/potfalling_0039_Layer-12.png",
//   "assets/gifLayers/potfalling_0039_Layer-13.png",
//   "assets/gifLayers/potfalling_0039_Layer-14.png",
//   "assets/gifLayers/potfalling_0039_Layer-15.png",
//   "assets/gifLayers/potfalling_0039_Layer-16.png",
//   "assets/gifLayers/potfalling_0039_Layer-17.png",
//   "assets/gifLayers/potfalling_0039_Layer-18.png",
//   "assets/gifLayers/potfalling_0039_Layer-19.png",
//   "assets/gifLayers/potfalling_0039_Layer-20.png",
//   "assets/gifLayers/potfalling_0039_Layer-21.png",
//   "assets/gifLayers/potfalling_0039_Layer-22.png",
//   "assets/gifLayers/potfalling_0039_Layer-23.png",
//   "assets/gifLayers/potfalling_0039_Layer-24.png",
//   "assets/gifLayers/potfalling_0039_Layer-25.png",
//   "assets/gifLayers/potfalling_0039_Layer-26.png",
//   "assets/gifLayers/potfalling_0039_Layer-27.png",
//   "assets/gifLayers/potfalling_0039_Layer-28.png",
//   "assets/gifLayers/potfalling_0039_Layer-29.png",
//   "assets/gifLayers/potfalling_0039_Layer-30.png",
//   "assets/gifLayers/potfalling_0039_Layer-31.png",
//   "assets/gifLayers/potfalling_0039_Layer-32.png",
//   "assets/gifLayers/potfalling_0039_Layer-33.png",
//   "assets/gifLayers/potfalling_0039_Layer-34.png",
//   "assets/gifLayers/potfalling_0039_Layer-35.png",
//   "assets/gifLayers/potfalling_0039_Layer-36.png",
//   "assets/gifLayers/potfalling_0039_Layer-37.png",
//   "assets/gifLayers/potfalling_0039_Layer-38.png",
//   "assets/gifLayers/potfalling_0039_Layer-39.png",
//   "assets/gifLayers/potfalling_0039_Layer-40.png"
// ];

// // TweenMax can tween any property of any object. We use this object to cycle through the array
// var obj = {curImg: 0};

// // create tween
// var tween = TweenMax.to(obj, 0.5,
//   {
//     curImg: images.length - 1,	// animate propery curImg to number of images
//     roundProps: "curImg",				// only integers so it can be used as an array index
//     repeat: 1,									// repeat 1 times
//     immediateRender: true,			// load first image automatically
//     ease: Linear.easeNone,			// show every image the same ammount of time
//     onUpdate: function () {
//       $("#myimg").attr("src", images[obj.curImg]); // set the image source
//     }
//   }
// );

// // init controller
// var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 0})
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

