// Do not use JavaScript functions like total, sum.

// create a table of objects of people having name and age

let people = [
		{fname:"Jane", lname:"Smith", age:10},
		{fname:"Liam", lname:"Henry", age:11},
		{fname:"Emma", lname:"Jones", age:13},
		{fname:"Olivia", lname:"Notly", age:31},
		{fname:"Noah", lname:"Ho", age:53},
		{fname:"William", lname:"Lee", age:52},
		{fname:"Benjamin", lname:"Amis", age:15},
	]
// write a function to receive the above array and return total of the ages
function sumWithEach(arr){
	let sum=0;
	arr.forEach(function(obj,index,value) {
		// console.log(obj.age);
		sum = sum +obj.age
		// console.log(sum);
	});
	return sum;
}

const ageSum = sumWithEach(people);
console.log(ageSum);

// write a function to receive the above array and average the ages
 
function aveWithEach(arr){
	let sum=0;
	arr.forEach(function(obj,index,value) {
		// console.log(obj.age);
		sum = sum + obj.age;
		ave = sum/(value.length);
	});
	return ave;
}

const aveAge = aveWithEach(people);
console.log(aveAge);

// Understand the documentation. Now that we have a few arrays let’s practise using the following:
//filter
const lastName = people.map(function(x){
	return x.lname;
})
const filtered = lastName.filter(lastName=>lastName.length>3);
console.log(filtered)

//map
const  age = people.map(function(x,index,arr){
	return x.age;
})
console.log(age)

//sort
age.sort();
console.log(age);

//reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let ageT= age.reduce(reducer);
console.log(ageT);

//every
//everybody is below 40,return false
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}
console.log(age.every(isBelowThreshold));

//some
//if anybody's age is even
var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};
console.log(age.some(even));

//find: The find() method returns the value of the first element 
// in the array that satisfies the provided testing function.
//find the age>30
const found = age.find(function(e){
	return e>30;
})
console.log(found);

//findindex The findIndex() method returns the index of the first element
 // in the array that satisfies the provided testing function. 
// Otherwise, it returns -1, indicating no element passed the test.
function isLargeNumber(e) {
  return e > 13;
}
console.log(age.findIndex(isLargeNumber));