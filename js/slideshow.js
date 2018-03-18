function unhideSlide(n, eventName) {
	console.log("Index passed:")
	console.log(n)
	var i;
	var slides = document.getElementsByClassName(eventName);
	if (n >= slides.length) {n=0}
	if (n < 0) {n=slides.length-1}
	console.log("Index shown:")
	console.log(n)
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}
	slides[n].style.display = "block"; 
	return n;
}

function changeWalkoutSlide(n) {
	walkoutSlideIndex+=n;
	walkoutSlideIndex = unhideSlide(walkoutSlideIndex, "walkoutSlides");
}

function changePanelSlide(n) {
	panelSlideIndex+=n;
	panelSlideIndex = unhideSlide(panelSlideIndex, "panelSlides");
}

function changeDebateSlide(n) {
	debateSlideIndex+=n;
	debateSlideIndex = unhideSlide(debateSlideIndex, "debateSlides");
}

var walkoutSlideIndex = 0;
var panelSlideIndex = 0;
var debateSlideIndex = 0;

$(document).ready(function(){
	walkoutSlideIndex = unhideSlide(walkoutSlideIndex, "walkoutSlides");
})
