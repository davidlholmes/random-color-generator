let chooseRandomButton = document.getElementById("chooseRandomButton");

let bg = document.getElementsByClassName('color');

chooseRandomButton.addEventListener('click', () => {
	let random1 = Math.round(Math.random() * 255);
	let random2 = Math.round(Math.random() * 255);
	let random3 = Math.round(Math.random() * 255);
	
	for (i = 0; i < bg.length; i++) {
		bg[i].style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
	}
}
)

let redInput = document.querySelector("#redInput");
let blueInput = document.querySelector("#blueInput");
let greenInput = document.querySelector("#greenInput");
let redDisplay = document.querySelector("#redDisplay");
let blueDisplay = document.querySelector("#blueDisplay");
let greenDisplay = document.querySelector("#greenDisplay");
let submit = document.querySelector("#submitSliders");

redInput.oninput = () => {
	redDisplay.style.backgroundColor = `rgb(${redInput.value}, 0, 0)`;
}

greenInput.oninput = () => {
	greenDisplay.style.backgroundColor = `rgb(0, ${greenInput.value}, 0)`;
}

blueInput.oninput = () => {
	blueDisplay.style.backgroundColor = `rgb(0, 0, ${blueInput.value})`;
}

submit.addEventListener('click', () => {
	let bg = document.getElementsByClassName('color');
	for (i = 0; i < bg.length; i++) {
		bg[i].style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
	}
})
