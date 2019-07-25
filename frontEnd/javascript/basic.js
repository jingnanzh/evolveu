console.log("Hello world from basic1.js");

btn = document.getElementById("button");
btn.addEventListener("click", onButtonPushed);

const text = document.getElementById("text");
// console.log(text);


//exercise: working with HTML input
function onButtonPushed() {
	console.log("I am in the button click event");
	console.log(text.value);
	console.log(text.value+1);
	console.log(Number(text.value) +1 );

}

//working with arrays

let myArray = [];
console.log(myArray);


document.getElementById("addbtn").addEventListener("click", function() {
	let newInput = document.getElementById("newInput").value;
	let message = document.getElementById("message")
	console.log(newInput);
	if (isNaN(newInput)) {
		console.log(isNaN(document.getElementById("newInput").value));
		message.textContent = "please put in a number";
	} else {

		console.log(isNaN(newInput));
		myArray.push(newInput)
		message.textContent = "a number has been added";
		console.log(myArray)
	}
});

document.getElementById("showbtn").addEventListener("click",function() {
	message.textContent = "The array is " + "[ " + myArray + " ]";
});

document.getElementById("totalbtn").addEventListener("click",function() {
	let sum = 0;
	let i = 0;
	for (i = 0; i<myArray.length; i++) {
		console.log(myArray.length);
		sum += Number(myArray[i]);
	}
	console.log(sum);
	message.textContent = "Total of the array is " + sum + ".";


});

document.getElementById("clearbtn").addEventListener("click",function() {
	myArray=[];
	message.textContent = "The array has been cleared.";
});

//tax calculator

// Canadian Tax Calculation
    // 15% on the first $47,630 of taxable income, plus
    // 20.5% on the next $47,629 of taxable income (on the portion of taxable income over 47,630 up to $95,259), plus
    // 26% on the next $52,408 of taxable income (on the portion of taxable income over $95,259 up to $147,667), plus
    // 29% on the next $62,704 of taxable income (on the portion of taxable income over 147,667 up to $210,371), plus
    // 33% of taxable income over $210,371 -->

	function calTax() {
		const income = document.getElementById("income").value;
		if (income <= 47630) {
			tax = income * 0.15;
		} 
		else if (income > 47630 && income <= 95259) {
			tax = 47630 * 0.15 + ((income - 47630) * 0.205);
		}	
		else if (income > 95259 && income <= 147667) {
			tax = 47630 * 0.15 + 47629 * 0.205 + ((income - 95259) * 0.26);
		}		
		else if (income > 147667 && income <= 210371) {
			tax = 47630 * 0.15 + 47629 * 0.205 + 52408 * 0.26 + ((income - 147667) * 0.29);
		}	
		else if (income > 210371) {
		tax = 47630 * 0.15 + 47629 * 0.205 + 52408 * 0.26 + ((income - 210371) * 0.33);
		}
		else {
			tax = "please type a number";
		}

	document.getElementById("demo").innerHTML = "Total tax is: " + tax;

	}


//Dictionaries

const obj= {
	ab: "Alberta",
	sk: "Saskatchewan",
	on: "Ontario"
};

console.log(obj);

let searchWord = document.getElementById("searchWord");
// console.log(searchWord);


let btnLookUp = document.getElementById("lookup");
btnLookUp.addEventListener("click", onLookUp);

let messageArea = document.getElementById("message1");

function onLookUp() {
	let keyword = searchWord.value;
	console.log(keyword);
	for (x in obj) {
		if (keyword === x) {
			let ans = obj[x];
			// let ans = object.values(obj)[x]; 
			// didn't make this work because it returns a list 
			messageArea.textContent = ans;
			// console.log(ans);
			// return
		} else {
			messageArea.textContent = "Please enter a valid province";
		}
	}
	

	// let ans= obj[keyword]	
	// console.log(ans);
	// messageArea.textContent = ans;

};