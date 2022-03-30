let chooseRandomButton = document.getElementById("chooseRandomButton");
let submit = document.querySelector("#submitSliders");
const bg = document.getElementsByClassName('color');
let paragraph = "";
let randomArray = [];
let hexDigits = [];
let redInput = document.querySelector("#redInput");
let blueInput = document.querySelector("#blueInput");
let greenInput = document.querySelector("#greenInput");
let redDisplay = document.querySelector("#redDisplay");
let blueDisplay = document.querySelector("#blueDisplay");
let greenDisplay = document.querySelector("#greenDisplay");


function decToHex(decNum) {
	i = 0;

	if (decNum === 0) {
		hexDigits[0] = 0;
		hexDigits[1] = 0;
	}

	while (decNum > 0) {
		hexDigits[i] = decNum % 16;
		if (hexDigits[i] === 10) {
			hexDigits[i] = "A";
		} else if (hexDigits[i] === 11) {
			hexDigits[i] = "B";
		} else if (hexDigits[i] === 12) {
			hexDigits[i] = "C";
		} else if (hexDigits[i] === 13) {
			hexDigits[i] = "D";
		} else if (hexDigits[i] === 14) {
			hexDigits[i] = "E";
		} else if (hexDigits[i] === 15) {
			hexDigits[i] = "F";
		}
		decNum = Math.floor(decNum / 16);
		i++;
	}
	
	return hexDigits.reverse().join('');
}

function pgText(a, b, c, d) {
	let paragraph = document.createElement("p");
	paragraph.setAttribute("id", "paragraph");
	paragraph.innerText = `${d} rgb(${a}, ${b}, ${c}).
	In hexadecimal, this would be #${decToHex(a)}${decToHex(b)}${decToHex(c)}.`;
	document.querySelector("#hiddenPG").appendChild(paragraph);
	if (document.querySelector("#hiddenPG").childNodes.length > 1) {
		document.querySelector("#hiddenPG").firstChild.remove();
	}
}

chooseRandomButton.addEventListener('click', () => {
	for (i = 0; i < 3; i++) {
		randomArray[i] = Math.round(Math.random() * 255);
	}

	for (i = 0; i < bg.length; i++) {
		bg[i].style.backgroundColor = `rgb(${randomArray[0]}, ${randomArray[1]}, ${randomArray[2]})`;
	}
	
	pgText(randomArray[0], randomArray[1], randomArray[2], "The random color value is");
}
)




redInput.oninput = () => {
	let paragraph = document.createElement("p");
	paragraph.innerText = `${redInput.value}`;
	document.querySelector("#redDisplay").appendChild(paragraph);
	if (document.querySelector("#redDisplay").childNodes.length > 1) {
		document.querySelector("#redDisplay").firstChild.remove();
	}
	return redInput.value;
}

greenInput.oninput = () => {
	let paragraph = document.createElement("p");
	paragraph.innerText = `${greenInput.value}`;
	document.querySelector("#greenDisplay").appendChild(paragraph);
	if (document.querySelector("#greenDisplay").childNodes.length > 1) {
		document.querySelector("#greenDisplay").firstChild.remove();
	}
	return greenInput.value;
}

blueInput.oninput = () => {
	let paragraph = document.createElement("p");
	paragraph.innerText = `${blueInput.value}`;
	document.querySelector("#blueDisplay").appendChild(paragraph);
	if (document.querySelector("#blueDisplay").childNodes.length > 1) {
		document.querySelector("#blueDisplay").firstChild.remove();
	}
	return blueInput.value;
}

submit.addEventListener('click', () => {
	/*redInput.oninput = () => {
		return redInput.value;
	}
	greenInput.oninput = () => {
		return greenInput.value;
	}
	blueInput.oninput = () => {
		return blueInput.value;
	}*/

	for (let i = 0; i < bg.length; i++) {
		bg[i].style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
		//console.log(redInput.value, greenInput.value, blueInput.value);
	}

	pgText(redInput.value, greenInput.value, blueInput.value, "You chose the color value");
})
