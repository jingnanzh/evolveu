console.log("hi from js")


function makeDiv(message) {
	const div = document.createElement("div");
	div.textContent = message;
	div.className = "clPanel";
	// console.log(div);
	return div;
}
console.log("testing makediv:", makeDiv("Make me a div"));

//add event listener on body click
document.body.addEventListener("click", onBodyClick);
// console.log("click"); 

//add event listener, change target to "Bang"
let counter = 1;
function onBodyClick(e) {
	console.log("onBodyClick");
	e.target.textContent= "Bang" + counter++;
};


//append child div
document.body.addEventListener("click", onButtonPushed);

function onButtonPushed(e) {
	console.log("onButtonPushed",e);
	e.target.appendChild(makeDiv("I fricking did it " + ++counter));
}

