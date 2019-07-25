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

// Write the function after this comment ---


// let i=0;

function loopStaff(a) {
	let staffEmail= [];
	console.log("hi");
	console.log(a);
	for (let i=0; i<a.length; i++) {
		// console.log(i);
		// console.log(staffname[i]);
		let email = a[i].fname + "." + a[i].lname +"@evolveu.ca";
		console.log(email);
		staffEmail.push(email);
		
	};
	return staffEmail;
};



function assertEquals(a,b) {
	if (a === b) {
		console.log("ok->" + a);
		return true;	
	} 	
	console.log("***the two values are not the same", "\n p1-->"+a, "\n p2-->" +b);
	return false;

};


// and before this comment ---

console.log('-----loopStaff');
const staffEmail = loopStaff(data.staff);
// console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);