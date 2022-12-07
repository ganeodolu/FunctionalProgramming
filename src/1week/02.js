// function accumulate(arr) {
//   let accumulator = 0;

//   for (let i = 0; i < arr.length; i++) {
//     accumulator += arr[i];
//   }

//   return accumulator;
// }

function forEach(array, f) {
	for (let i = 0; i < array.length; i++) {
		let item = array[i];
		f(item);
	}
}

function accumulate(array, init, f) {
	let accumulator = init;
	forEach(array, function (element) {
		accumulator = f(accumulator, element);
	});
	return accumulator;
}

exports.accumulate = accumulate;
