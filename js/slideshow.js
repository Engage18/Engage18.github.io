"use strict";

const buttonMap = new WeakMap;

function changeLeft() {
  shiftSlide(buttonMap.get(this), -1);
}

function changeRight() {
  shiftSlide(buttonMap.get(this), 1);
}

function SlideshowInstance(imageDiv, leftButton, rightButton) {
  this.leftButton = leftButton;
  buttonMap.set(leftButton, this);
  this.rightButton = rightButton;
  buttonMap.set(rightButton, this);
  this.imageArray = imageDiv.querySelectorAll("img");
  this.index = 0;
  leftButton.addEventListener("click", changeLeft);
  rightButton.addEventListener("click", changeRight);
}

function shiftSlide(instance, number) {
	console.log("Shift slides run");
	const originalIndex = instance.index;
	instance.index += number;
	console.log(instance);
	console.log(instance.imageArray);
	if (instance.index == instance.imageArray.length) {instance.index = 0}
	if (instance.index < 0) {instance.index = instance.imageArray.length - 1}
	instance.imageArray[originalIndex].style.display = "none";
	instance.imageArray[instance.index].style.display = "block";
}

function initSlides(slideshows) {
	var instances = [];
	for(var i=0; i<slideshows.length; i++) {
		console.log(slideshows[i]);
		const imageDiv = slideshows[i].querySelector(".imageContainer");
		const leftButton = slideshows[i].querySelector(".prevButton");
		const rightButton = slideshows[i].querySelector(".nextButton");
		instances.push(new SlideshowInstance(imageDiv, leftButton, rightButton))
		console.log(instances[i].imageArray);
	}
	return instances;
}

$(document).ready(function() {
	const slideshows = document.getElementsByClassName("slideshowContainer");
	for(var i=0; i<slideshows.length; i++) {
		slideshows[i].style.display = "none";
	}
	$(window).on("load", function() {
		var instances = initSlides(slideshows);
		for(var i=0; i<instances.length; i++) {
			console.log("Image shown");
			slideshows[i].style.display = "block";
			instances[i].imageArray[0].style.display = "block";
		}
	})
})
