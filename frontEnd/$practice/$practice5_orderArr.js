console.log("hello from exercise");
const array1 = [3,1];

function orderArray(xyz) {
	console.log("in orderArray",xyz);
	if (xyz[0] < xyz[1]) {
		return xyz;

	}	else {
		return [xyz[1],xyz[0]];
	}
}

console.log("Should be: 1, 3:", orderArray(array1));

console.log("Should Be: 1, 5:", orderArray([1, 5]));

console.log("Should Be: 10, 20:", orderArray([20, 10]));
