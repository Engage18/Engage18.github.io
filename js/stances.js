"use strict";

const buttonMap = new WeakMap;
const stanceButtons = document.getElementsByClassName("stanceButton");
const stanceDescriptions = document.getElementsByClassName("stanceText");

function showDescription() {
	for(var i = 0; i < stanceDescriptions.length; i++) {
		stanceDescriptions[i].style.display = "none";
		stanceButtons[i].style.borderBottom = "4px solid red";
	}
	console.log(buttonMap.get(this).stanceDescription);
	console.log(this);
	buttonMap.get(this).stanceDescription.style.display = "list-item";
	this.style.borderBottom = "4px solid blue";
}

function PolicyPair(stanceButton, stanceDescription) {
	this.stanceButton = stanceButton;
	buttonMap.set(stanceButton, this);
	this.stanceDescription = stanceDescription;
	stanceButton.addEventListener("click", showDescription);
}

$(document).ready(function() {
	for(var i = 0; i < stanceButtons.length; i++) {
		new PolicyPair(stanceButtons[i], stanceDescriptions[i]);
		stanceDescriptions[i].style.display = "none";
	}
})