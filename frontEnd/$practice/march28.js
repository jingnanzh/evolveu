
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



function assertEquals(a,b) {
	if(a===b) {
		console.log ("ok->" + a);
		return true;
	}
	console.log("*** the two values are not the same:","\n p1-->"+a, "\n p2-->"+b);
	return false;
}

let largeBalances = data.staff.filter(function(element){
	console.log("elment=", element)
	if (element.balance >= 1000) {
		return element.balance;

	}
})


console.log(largeBalances);
assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");