const input = document.getElementById("input");
const output = document.getElementById('output');

function capitals() {
	if (input.value == "") {
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = 'please enter the prompt 🤛👊';
		output.appendChild(paragraph);
	}
	else{
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = input.value;
		paragraph.classList.add("capitalize");
		output.appendChild(paragraph);
	}
	
}
function underline() {
	if (input.value == ""){
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = 'please enter the prompt 🤛👊';
		output.appendChild(paragraph);
	}
	else{
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = input.value;
		paragraph.classList.add("underline");
		output.appendChild(paragraph);
	}
	
}
function smalls() {
	if (input.value == ""){
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = 'please enter the prompt 🤛👊';
		output.appendChild(paragraph);
	}
	else{
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = input.value;
		paragraph.classList.add("small");
		output.appendChild(paragraph);
	}
}
function semicaps() {
	if (input.value == ""){
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = 'please enter the prompt 🤛👊';
		output.appendChild(paragraph);
	}
	else{
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = input.value;
		paragraph.classList.add("semicaps");
		output.appendChild(paragraph);
	}
	

}
function bold() {
	if (input.value == ""){
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = 'please enter the prompt 🤛👊';
		output.appendChild(paragraph);
	}
	else{
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = input.value;
		paragraph.classList.add("bold");
		output.appendChild(paragraph);
	}

}
function italic() {
	if (input.value == ""){
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = 'please enter the prompt 🤛👊';
		output.appendChild(paragraph);
	}
	else{
		output.innerHTML = '';
		let paragraph = document.createElement('p');
		paragraph.innerHTML = input.value;
		paragraph.classList.add("italic");
		output.appendChild(paragraph);
	}
	
}
