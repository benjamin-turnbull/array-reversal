// reverse array by creating new array with the same elements in the inverse order
function reverseArray(array) {
	newArray = [];
	for (i = (array.length - 1); i >= 0; i--) {
		newArray.push(array[i]);
	}
	return newArray;
}

// reverses array by modifying the original array by reversing the order of the elements
function reverseArrayInPlace(array) {
	for (i = 0; i < Math.floor(array.length / 2); i++) {
		let old = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = old;
	}
	return array;
}

numbers = [5, 9, 2, 4, 7];

console.log(reverseArray(numbers));
console.log(reverseArrayInPlace(numbers));