// Bon courage ! :-)

// Get all element from the dom
const btn1 = document.querySelector('#btn1');
const h1 = document.querySelector('#h1');
const input1 = document.querySelector('#input1');
const span1 = document.querySelector('#span1');

// Log and change h1 when click the button
btn1.addEventListener('click', () => {
	console.log("bonjour");
	h1.innerHTML = "Bonjour";
});

// Add evennt lister to the input to change the span element
input1.addEventListener('keyup', () => {
	span1.innerHTML = input1.value;
});