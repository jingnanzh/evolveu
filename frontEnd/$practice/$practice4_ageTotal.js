const 	people = [
		{fname:"Jane", lname:"Smith", age:10},
		{fname:"Liam", lname:"Henry", age:11},
		{fname:"Emma", lname:"Jones", age:13},
		{fname:"Olivia", lname:"Notly", age:31},
		{fname:"Noah", lname:"Ho", age:53},
		{fname:"William", lname:"Lee", age:20},
		{fname:"Benjamin", lname:"Amis", age:15},
];

		console.log(people.length);

function ageTotal(people) {
	// console.log("hi");
	let sum = 0;
	for (let i=0; i<people.length; i++) {
		// console.log(people[i].age);
		sum +=people[i].age;
		// console.log(sum);
	};
	return sum;	
};

const total = ageTotal(people);
console.log(total)

