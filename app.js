let button = document.getElementById("button");

button.addEventListener('click', () => {
	let random1 = Math.round(Math.random() * 255);
	let random2 = Math.round(Math.random() * 255);
	let random3 = Math.round(Math.random() * 255);
	console.log(random1);
	console.log(random2);
	console.log(random3);
	let bg = document.querySelector('main');
	bg.style.color = "rgb(random1, random2, random3)";
})
