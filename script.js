const text1 = document.getElementById("text1");
const button1 = document.getElementById("button1");
const list1 = document.getElementById("list1");
const allLis = document.querySelectorAll("li");



button1.addEventListener("click", checkButton1);

text1.addEventListener("keypress", checkText1);

function checkButton1() {
	if(checkLength() > 0) {
		addLi();
	}
}

function checkText1() {
	if(event.keyCode === 13 && checkLength() > 0){
			addLi();
		}
}


function checkLength(){
	return text1.value.length;
}


function addLi() {
	var newLi = document.createElement("li");
	var newText = document.createTextNode(text1.value);
	newLi.appendChild(newText);
	newLi.addEventListener("click", addDone);
	var newButt = document.createElement("button");
	newButt.addEventListener("click", addButton);
	var butText = document.createTextNode("X");
	newButt.appendChild(butText);
	var space = document.createTextNode(" ");
	newLi.appendChild(space);
	newLi.appendChild(newButt);
	list1.appendChild(newLi);
	text1.value = '';
}




function addDone() {
	this.classList.toggle("done");
}

function addButton() {
	this.parentElement.remove();
}



for (let i = 0; i < allLis.length; i++ ) {
	allLis[i].addEventListener("click", addDone);
	var newButt = document.createElement("button");
	newButt.addEventListener("click", addButton);
	var butText = document.createTextNode("X");
	newButt.appendChild(butText);
	var space = document.createTextNode(" ");
	allLis[i].appendChild(space);
	allLis[i].appendChild(newButt);
}








