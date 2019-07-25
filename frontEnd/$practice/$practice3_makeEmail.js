/*	
	Write the function to format an email based on an object / map
*/

// Write the function after this comment ---

console.log("-------------- makeEmailArr");

function makeEmailObj(object) {
	console.log(object);
	// let object = {fname, lname};
	// fname = object.fname;
	// lname = object.lname;
// 	// lname = name[1];
	let Email = object.fname + "." + object.lname +"@evolveu.ca";
	console.log(Email);
// 	return Email;
};
// 
// arrayLarry = {fname:'larry', lname:'shumlich'};
// makeEmailObj(arrayLarry);

function assertEquals(a,b) {
	if (a === b) {
		console.log("ok->" + a);
		return true;	
	} 
	
	console.log("***the two values are not the same", "\n p1-->"+a, "\n p2-->" +b);
	return false;

};


// and before this comment ---

arrayLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(arrayLarry));
// assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
// assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));