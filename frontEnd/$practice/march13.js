
/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---

console.log("-------------- makeEmailArr");
function makeEmailArr(array) {
	// console.log(array);
	// array = [fname, lname];
	// fname = name[0];
	// lname = name[1];
	let Email = array[0] + "." + array[1] +"@evolveu.ca"
	console.log(Email);
	return Email;
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

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));


