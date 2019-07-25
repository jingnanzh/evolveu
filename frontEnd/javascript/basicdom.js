//comp107

//say hi using DOM js
const doc= document.getElementById("doc1");
let t= doc.textContent ="Hello from basicdom.js";
// console.log("document is ", t);


//update a node/element
const btn= document.getElementById("idBtnPush");
btn.addEventListener("click", onButtonPushed);

const clickTagidH1= document.getElementById("idH1");
clickTagidH1.addEventListener("click", onTagClicked);

const mouseOveridH4= document.getElementById("idH4");
mouseOveridH4.addEventListener("mouseover", onMouseOver);

const btn2 = document.getElementById('idBtnPush2');
btn2.addEventListener("click", onButtonPushed2);

document.body.addEventListener("click", onBodyClick);

function onButtonPushed() {
	// console.log("you pushed me");
	if (idH1.textContent === "Hello World") {
		idH1.textContent = "Hello Universe";
	} else{
	idH1.textContent = "Hello World";
	
	}

};

function onTagClicked() {
	// console.log("onTagClicked");
	if (idH1.textContent === "Hello World") {
		idH1.textContent = "Hello Universe";
		} else{
		idH1.textContent = "Hello World";
		
		}

};

function onMouseOver() {
	// console.log("onMouseOver");
	if (idH4.textContent === "Hello Calgary") {
		idH4.textContent = "Hello Saskatchewan";
		} else{
		idH4.textContent = "Hello Calgary";
		}

};

//adding elements
function onButtonPushed2() {
	// console.log("add new h1");
  	const h1 = document.createElement("h1");
  	// console.log(h1)
  	h1.textContent = idH1.textContent;
  	// console.log(h1.textContent)
  	document.body.appendChild(h1);
};

//add onBodyClick

function onBodyClick(e) {
	console.log("onBodyClick");
};

//get element attribute value
var h2 = document.getElementsByTagName("h2")[0].getAttribute("place");
// console.log(h2);

//dom insertBefore
//is below a group element? 
function createLi() {
  const newItem = document.createElement("LI");		//creat a LI node
  const textnode = document.createTextNode("Water");	//create a Text node
  newItem.appendChild(textnode); 					//append the Text node to the Li node
  const list = document.getElementById("myList");
  list.insertBefore(newItem, list.childNodes[0]);  	//insert the LI node before the first sibling

};

//dom nextSibling

function getNextSibling() {
	// console.log(document.getElementById("item1"));
	const x = document.getElementById("item1").nextSibling.innerHTML; 
	// console.log(x);
  	document.getElementById("sibling").textContent = "The item after Coffee is:" + x;
};