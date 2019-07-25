
const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

// A callback is a function that is to be executed after another function 
// has finished executing — hence the name 'call back'. 
// More complexly put: In JavaScript, functions are objects. 
// Because of this, functions can take functions as arguments, 
// and can be returned by other functions.
// Write the function after this comment ---
// The for/in statement loops through the properties of 
// an object. The block of code inside the loop will be 
// executed once for each property. JavaScript supports 
// different kinds of loops: for - loops through a block 
// of code a number of times.
function loopWithForIn(staff) {
	let staffEmail= [];
	let array = data.staff;
	console.log (array);
	for (i in array) {
		let email = array[i].fname + "." + array[i].lname +"@evolveu.ca";
		console.log(email);
		staffEmail.push(email);
	}
	return staffEmail;
	console.log(staffEmail);

};

//assertEquals
function assertEquals(a,b) {
	if (a === b) {
		console.log("ok->" + a);
		return true;	
	} 	
	console.log("***the two values are not the same", "\n p1-->"+a, "\n p2-->" +b);
	return false;
};


// console.log('-----emailForOf')
// const emailForOf = loopWithForOf(data.staff);
// // console.log(emailForOf);
// assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
// assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
// assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);

