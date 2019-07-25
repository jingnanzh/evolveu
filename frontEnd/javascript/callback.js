console.log('-----Call Back - - -');

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

function myCallBackFunction(ar, func) {
    // console.log("in myCallBackFunction");
    // console.log("   ar   --->", ar);
    // console.log("   func --->", func);
    for (let i=0; i<ar.length; i++) {
    	console.log('==>',ar[i]);
    	func(ar[i]);
    }
}

// function myWorkerFunction(p1) {
//     console.log('myWorkerFunction', p1);
// }


myCallBackFunction(data.staff, myWorkerFunction);
// myWorkerFunction('asdf');

function myWorkerFunction(qqqq) {
    console.log('myWorkerFunction', qqqq);
}

// function add5(qqqq) {
//     console.log('add5', qqqq + 5);
// }

// const mmmm = [11,22,33,44];

// myCallBackFunction(mmmm, add5);
// myCallBackFunction(data.staff, myWorkerFunction);

// myCallBackFunction(['abc','bcd','cde'], myWorkerFunction);



// myWorkerFunction('asdf');



//my code
// const myCallBackFunction = (arr, myFunc) => `call back`;
// console.log("myCallBackFunction");

// const myWorkerFunction = (p) => `myWorkerFunction`;
// console.log("myWorkerFunction", asdf);



// let array = [1,2,3,4];
// array.forEach(function(a,b,c){
// 	console.log(a,b,c);
// })

