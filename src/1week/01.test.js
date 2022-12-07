const { lineFunction, anotherLineFunction } = require('./01.js');

// describe('lineFunction', () => {
//   it('case: 1', () => {
//     expect(lineFunction()).toBe(7);
//   });
// });

describe('lineFunction', () => {
  it('case: 1', () => {
    expect(lineFunction(2)).toBe(7);
  });
});

describe('anotherLineFunction', () => {
  it('case: 1', () => {
    expect(anotherLineFunction(2, 2, 3)).toBe(7);
  });
});
