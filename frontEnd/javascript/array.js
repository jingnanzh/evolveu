
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
	message.textContent = "The array has been cleared."
});