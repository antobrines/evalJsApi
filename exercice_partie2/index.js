// Bon courage ! :-)
/**
 * Function to make a request to an url and generate the dom with the proper function
 * @param {*} url 
 */
function makeRequest(url) {
	var request = new Request(url);
	fetch(request).then((response) => {
		return response.json();
	}).then((data) => {
		console.log(data);
		generateDom(data);
	}).catch((error) => {
		console.log('Request failed', error)
	});
}

/**
 * Function to generate dom from data
 * @param {*} data 
 */
function generateDom(datas) {
	const container = document.querySelector('#container');
	container.innerHTML = '';
	datas.forEach((data) => {
		// All element to create
		const div = document.createElement('div');
		const span = document.createElement('span');
		const i = document.createElement('i');
		const btn = document.createElement('button');
		// Lister to the button brut
		btn.addEventListener('click', () => {
			initBtnBrut(data);
		})
		// Add data to the elements created
		span.innerHTML = data?.name;
		i.innerHTML = data?.titles[0];
		btn.innerHTML = 'VOIR BRUT';
		// Add element to the dom
		container.appendChild(div);
		div.appendChild(span);
		// Add space to element (ugly)
		div.appendChild(document.createTextNode(' '));
		div.appendChild(i);
		div.appendChild(document.createTextNode(' '));
		div.appendChild(btn);
	})
}

/**
 * Function to init btn navigation and add listener to it
 * @param {*} url 
 * @param {*} page 
 */
function initBtnNav(url, page) {
	// Add test for hidden btn if page < 0 and > maxSize
	const prev = document.querySelector('#prev');
	const suiv = document.querySelector("#suiv");
	prev.addEventListener('click', () => {
		makeRequest(url + --page);
		document.querySelector('#code').innerHTML = '';
	});
	suiv.addEventListener('click', () => {
		makeRequest(url + ++page);
		document.querySelector('#code').innerHTML = '';
	});
}

function initBtnBrut(data) {
	// Get div code
	const divCode = document.querySelector('#code');
	// Add element to the <code>
	divCode.innerHTML = JSON.stringify(data, null, '\t');
}

// Init function when dom ready
window.addEventListener("DOMContentLoaded", () => {
	const page = 59;
	const url = 'https://anapioficeandfire.com/api/characters?page=';
	initBtnNav(url, page);
	makeRequest(url + page);
});
