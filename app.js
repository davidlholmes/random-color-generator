const button = document.getElementById("button");

function chooseRandomColor() {
	let random1 = Math.round(Math.random() * 255);
	let random2 = Math.round(Math.random() * 255);
	let random3 = Math.round(Math.random() * 255);
	console.log(random1);
	console.log(random2);
	console.log(random3);
}

button.addEventListener("click", chooseRandomColor());
