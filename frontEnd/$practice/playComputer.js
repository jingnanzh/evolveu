// console.log('--call back--');

// let count = 0;
// function myCounter() {
// 	console.log(`We are at count: ${count++}`);
// }

// // console.log(`myCounter stage1: ${myCounter}`);
// // console.log(`myCounter stage2: ${myCounter()}`);

// setInterval(myCounter,1000);


//another practice 
console.log ("---Fuction options---");

function simpleFunction(p1) {
	return `simpleFunction: ${p1}`;
}

const simpleArrow = (p1) => `   simpleArrow: ${p1}   `; 

const anotherArrow = (p1) => {    
	const a = 'do what ever is needed';    
	const b = 'in this error function';    
	return `   anotherArrow: ${p1}   `;
}

console.log(simpleFunction('what.')); 

console.log(simpleArrow('what!')); 

console.log(anotherArrow('what?')); 

console.log(function () {   
	return 'what ever is new!';
}()); 

