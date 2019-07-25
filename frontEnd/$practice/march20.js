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
function loopWithEach(arr){
	let email = [];
	arr.forEach(function(obj, index, values) {
		// console.log(obj,index,values);
		email.push(obj.fname+"." +obj.lname + "@evolveu.ca");
		// console.log(email);		
	});
	return email;
}

// function makeEmail(item, index) {
// 	let email = [item.fname+"."+item.lname+"@evolveu.ca"].join("");
// 	console.log(email);
// 	return email;
// 	console.log(email);
// }

const makeEmail = (item,index) =>  [item.fname+"."+item.lname+"@evolveu.ca"].join("");

// function loopWithMap(arr) {
// 	console.log("hi");
// 	let newArr = arr.map(makeEmail);
// 	return newArr;
// }

const loopWithMap = (arr) => arr.map((makeEmail));

  
function assertEquals(a,b) {
	if(a===b) {
		console.log ("ok->" + a);
		return true;
	}
	console.log("*** the two values are not the same:","\n p1-->"+a, "\n p2-->"+b);
	return false;
}
// and before this comment ---

console.log('-----emailWithEach')
const emailWithEach = loopWithEach(data.staff);
console.log(emailWithEach);
assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);

// console.log('-----emailWithMap')
const emailWithMap = loopWithMap(data.staff);
console.log(emailWithMap);
assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);


//please help! why this join is not working:
// function loopWithEach(arr){
// 	// let email = [];
// 	arr.forEach(function(obj, index, values) {
// 		console.log(obj,index,values);
// 		let email = [obj.fname+"." +obj.lname + "@evolveu.ca"].join(" ");
// 		// return email;
// 		console.log(email);		
// 	});
// 	// return email;
// }
