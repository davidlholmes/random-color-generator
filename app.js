let chooseRandomButton = document.getElementById("chooseRandomButton");

let bg = document.getElementsByClassName('color');

let randomArray = [];

chooseRandomButton.addEventListener('click', () => {
	for (i = 0; i < 3; i++) {
		randomArray[i] = Math.round(Math.random() * 255);
	}

	for (i = 0; i < bg.length; i++) {
		bg[i].style.backgroundColor = `rgb(${randomArray[0]}, ${randomArray[1]}, ${randomArray[2]})`;
	}

	if (!!document.getElementById("paragraph")) {
		document.querySelector("#hiddenPG").removeChild(paragraph);
	  let paragraph = document.createElement("p");
  	paragraph.setAttribute("id", "paragraph");
	  paragraph.innerText = `The selected color value is rgb(${randomArray[0]}, ${randomArray[1]}, ${randomArray[2]}).`;
	} else {
		let paragraph = document.createElement("p");
  	paragraph.setAttribute("id", "paragraph");
	  paragraph.innerText = `The selected color value is rgb(${randomArray[0]}, ${randomArray[1]}, ${randomArray[2]}).`;
		document.querySelector("#hiddenPG").appendChild(paragraph);
	}
})

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