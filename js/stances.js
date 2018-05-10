"use strict";

const buttonMap = new WeakMap;
const stanceButtons = document.getElementsByClassName("stanceButton");
const stanceDescriptions = document.getElementsByClassName("stanceText");

function showDescription() {
	for(var i = 0; i < stanceDescriptions.length; i++) {
		stanceDescriptions[i].style.display = "none";
		stanceButtons[i].style.borderBottom = "3px solid red";
	}
	buttonMap.get(this).stanceDescription.style.display = "block";
	this.style.borderBottom = "3 px solid blue";
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
	}
})