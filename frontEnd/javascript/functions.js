












	
	
	
	
	
	
		
	// 		console.log("Hello from myFunction v2", xx, yy);
	// 		console.log(value_to_return);
	// 		const value_to_return = xx + "-" + yy;
	// 		return value_to_return;
	// 	console.log("v1:", value1);
	// 	console.log("v2:", value2);
	// 	console.log(func("Hello","World"));
	// 	const func = myFunction;
	// 	const value1 = myFunction("Rocks","Rings");
	// 	const value2 = myFunction("Coding","Fun");
	// 	} 
	// console.log("Hello from functions.js v2");
	// function myFunction(xx, yy) {
// 	return a+b+c;
// 	return fname + "." + lname + "@evolveu.ca";
// // 	console.log("Hi from myFunction v1");
// // ------------------Array Sum: #3------------------
// // ----------Create Email Address #2 ----------、
// // -------adding number-------
// // console.log("Hi from function.js v1")
// // function myFunction() {
// // myFunction();
// // myFunction();
// // }
// console.log("my_add  answer 1: ", ans12);
// console.log("my_add answer 2: ", my_add(2,22,222));
// console.log('my_email answer 1:', ans14);
// console.log('my_email answer 1:',my_email('bill','jones'));
// const ans12 = my_add(1,2,3);
// const ans14 = my_email('jane','smith');
// const numbers = [5,10,15,20];
// function arraySum(numbers) {
// function my_add(a,b,c) {
// function my_email(fname,lname) {
// }
// 
let numbers = [5,10,15,20];
console.log(numbers);

function addArray() {
	let i = 0;
	let sum = 0;
	console.log(sum);
	for (i=0; i<4; i++){
		sum += Number(numbers[i]);
		console.log(sum);
	}

};
addArray();


// *
// 	---------- String Search ----------
// */

const string_array = [
	'this is a string',
	'that is also a string',
	'what about this',
	'what about that',
];
const search1 = "this";
const search2 = "is";

function look_for_string(string_array, search) {	
	for (i=0; i<string_array.length;i++) {
		res = string_array[i].match(/this/g);
		console.log(i);
		console.log(res);
	}
}

const ans1 = look_for_string(string_array, search1);
// const ans2 = look_for_string(string_array, search2);

console.log("We found '", search1, "' in", ans1, "lines");
// console.log("We found '", search2, "' in", ans2, "lines");
