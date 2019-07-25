
/*
	--- add two numbers
	Write the function that will make this code work.
*/
console.log("Add numbers");

// ---- put function here ----


function addNumbers(x,y) {
	let answer = x + y;
	return answer;
}


const myAnswer1 = addNumbers(1,2);
const MyShouldBe1 = 3;

if (myAnswer1 != MyShouldBe1) {
	console.log("***** We have an error here *****",
		myAnswer1,
		" is not = ",
		MyShouldBe1,
		" and it should be."
	)
}

console.log("SB 5" ,addNumbers(2,3));

console.log("SB 15" ,addNumbers(10,15));

console.log("SB 500" ,addNumbers(200,300));





