let chooseRandomButton = document.getElementById("chooseRandomButton");
let bg = document.getElementsByClassName('color');
let paragraph = "";
let randomArray = [];
let hexDigits = [];
let redInput = document.querySelector("#redInput");
let blueInput = document.querySelector("#blueInput");
let greenInput = document.querySelector("#greenInput");
let redDisplay = document.querySelector("#redDisplay");
let blueDisplay = document.querySelector("#blueDisplay");
let greenDisplay = document.querySelector("#greenDisplay");
let submit = document.querySelector("#submitSliders");

function decToHex(decNum) {
	i = 0;
	while (decNum > 0) {
		hexDigits[i] = decNum % 16;
		if (hexDigits[i] = 10) {
			hexDigits[i] = 'A';
		} else if (hexDigits[i] = 11) {
			hexDigits[i] = 'B';
		} else if (hexDigits[i] = 12) {
			hexDigits[i] = 'C';
		} else if (hexDigits[i] = 13) {
			hexDigits[i] = 'D';
		} else if (hexDigits[i] = 14) {
			hexDigits[i] = 'E';
		} else if (hexDigits[i] = 15) {
			hexDigits[i] = 'F';
		}
		decNum = Math.floor(decNum / 16);
		i++;
	}
	return hexDigits.reverse().concat();
}


chooseRandomButton.addEventListener('click', () => {
	for (i = 0; i < 3; i++) {
		randomArray[i] = Math.round(Math.random() * 255);
	}

	for (i = 0; i < bg.length; i++) {
		bg[i].style.backgroundColor = `rgb(${randomArray[0]}, ${randomArray[1]}, ${randomArray[2]})`;
	}

	if (!!document.getElementById("paragraph")) {
		document.querySelector("#hiddenPG").removeChild(paragraph);
	}

	let paragraph = document.createElement("p");
	paragraph.setAttribute("id", "paragraph");
	function pgText(a, b, c) {
		paragraph.innerText = `The selected color value is rgb(${a}, ${b}, ${c}). In hexadecimal, this would be`;
	}
	pgText(randomArray[0], randomArray[1], randomArray[2]);
	document.querySelector("#hiddenPG").appendChild(paragraph);
}
)




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