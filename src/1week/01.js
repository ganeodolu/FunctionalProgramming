// var x = 2;
// 
// function lineFunction() {
//   return 2 * x + 3;
// }

function lineFunction (number) {
  return 2 * number + 3;
}

function anotherLineFunction (slope, number, intercept) {
  return slope * number + intercept;
}

exports.lineFunction = lineFunction;
exports.anotherLineFunction = anotherLineFunction;

// answer
// 전역변수를 읽는 것은 암묵적 입력이므로 액션이 됩니다.
// 암묵적 입력을 인자로 넣어 명시적 입력으로 변경하여 계산으로 수정하였습니다. 
