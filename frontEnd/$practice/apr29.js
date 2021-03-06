// let determineTotal = function() {write function here
// };
// //
// determineTotal();


// Based on previous exercise, April 5, now write a function which logs to
// the console the total number of people, total age, and average age of people
// from BC and Alberta only, regardless of age. 

//
// Start of Dependencies:
//
console.log("------April 5-------")

let people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

	// console.log("data", people)

let processPeople = function(data, callback) { 
	console.log("processPeople")
	for (let i=0; i<data.length;i++){
		if (data[i].province.toLowerCase()==="ab" || data[i].province.toLowerCase()==="bc"  ){
			if (typeof callback ==="function") {
				callback(data[i]);
			}
		}
	// return data.filter(function(el){
	// return data.province.toLowerCase().indexOf(callback.toLowerCase()) > -1;
	}
}

// function(data,callback);
// processPeople(people,callback)
processPeople(people, function(item) {
	// console.log(item)
	if (item.age>25) {
		console.log(item.fname +" "+item.lname)
	}
});

// -----------------------------------------------------------------
console.log("------April 29-------")


let determineTotal = function() {

    totalPeople = 0;
    totalAge = 0;
    ageAverageAge = 0;

    processPeople (people, function(item) {
        totalPeople += 1;
        totalAge += item.age;
    });

    if (totalPeople> 0) { ageAverageAge =Math.round(totalAge/totalPeople,2)} ;

    console.log ("Total number of people = ", totalPeople) ;
    console.log ("Total age = ", totalAge) ;
    console.log ("Average age = ",ageAverageAge) ;

    
};
//
determineTotal();