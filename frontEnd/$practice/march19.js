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

// console.log(data.staff);


// Write the function after this comment ---
function loopWithForOf(arr) {
	let email = [];
	console.log("hi");
	for (let i of arr) {
		// console.log(i);
		email.push(i.fname+"." +i.lname + "@evolveu.ca");
	}
	return email;
}


function loopWithForIn(arr) {
	let email = [];
	for (x in arr) {
		// console.log(x);
		let y= arr[x].fname +"." +arr[x].lname + "@evolveu.ca";
		// console.log(y);
		email.push(y);
	}
	return email;	 
}


function assertEquals(a,b) {
	if(a===b) {
		console.log ("ok->" + a);
		return true;
	}
	console.log("*** the two values are not the same:","\n p1-->"+a, "\n p2-->"+b);
	return false;
}
// and before this comment ---
// 
const emailForOf = loopWithForOf(data.staff);
console.log(emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);