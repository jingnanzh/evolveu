let i=0;

//add card for the main button

// make new card
function makeCard() {

	let newLine = "\r\n"; //make blank line

// create the div
	const div = document.createElement("div");
	div.className = "clPanel";
	div.id = "card"
	// + i;
	let card = div.id;
	console.log(div.id);
	console.log(card);
	div.textContent = "Card " + i +newLine +newLine;

	//create a add before button

	let btnAddBefore = document.createElement("button");
	btnAddBefore.className ="buttons";
	btnAddBefore.textContent ="Add before";
	btnAddBefore.addEventListener("click", onAddBefore);

	//add a button:Add before
	div.appendChild(btnAddBefore);

	//create a add after button
	let btnAddAfter = document.createElement("button");
	btnAddAfter.className ="buttons";
	btnAddAfter.textContent = "Add after";
	btnAddAfter.addEventListener("click", onAddAfter);

	//add a button:Add after
	div.appendChild(btnAddAfter);

	//create a another line break
	

	//create a delete button
	let btnDelete = document.createElement("button");
	btnDelete.className ="buttons";
	btnDelete.textContent = "Delete";
	btnDelete.addEventListener("click",onDelete);

	//add a button: delete
	div.appendChild(btnDelete);


	return div;
}

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", onAddCard);

// btnAddBefore.addEventListener("click", addBefore);

function onAddCard() {
	i++;
	console.log("append card");
	d1=document.getElementById("d1")
	d1.appendChild(makeCard());
	
	
};

function onAddBefore(e) {
	i++;
	console.log("add before card");
	let currentCard = e.target.parentNode;
	let newCard = makeCard();
	console.log(newCard);
	d1.insertBefore(newCard, currentCard);
	// d1.insertBefore((makeCard()), card);
};


function onAddAfter(e) {
	i++;
	console.log("add after card");
	d1.insertBefore((makeCard()), card.nextSibling);
	console.log(card.nextSibling);
	
}

function onDelete(e) {
	let currentCard = e.target.parentNode;
	currentCard.remove();
}
