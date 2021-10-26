const withdraw = require('../../src/core/cashmachine.js');

test('given withdraw of 5 should note(s): [5]', () => {
    expect(withdraw(5)).toEqual(expect.arrayContaining([5]));
});

test('given withdraw of 10 should note(s): [10]', () => {
    expect(withdraw(10)).toEqual(expect.arrayContaining([10]));
});

test('given withdraw of 20 should note(s): [20]', () => {
    expect(withdraw(20)).toEqual(expect.arrayContaining([20]));
});

test('given withdraw of 50 should note(s): [50]', () => {
    expect(withdraw(50)).toEqual(expect.arrayContaining([50]));
});

test('given withdraw of 100 should note(s): [100]', () => {
    expect(withdraw(100)).toEqual(expect.arrayContaining([100]));
});

test('given withdraw of 200 should note(s): [200]', () => {
    expect(withdraw(200)).toEqual(expect.arrayContaining([200]));
});

test('given withdraw of 70 should return note(s): [20, 50]', () => {
    expect(withdraw(70)).toEqual(expect.arrayContaining([20, 50]));
});

test('given withdraw of 90 should return note(s): [50, 20, 20]', () => {
    expect(withdraw(90)).toEqual(expect.arrayContaining([50, 20, 20]));
});

test('given withdraw of 95 should return note(s): [5, 20, 20, 50]', () => {
    expect(withdraw(95)).toEqual(expect.arrayContaining([50, 20, 20]));
});

test('given withdraw of 110 should return note(s): [10, 100]', () => {
    expect(withdraw(110)).toEqual(expect.arrayContaining([10, 100]));
});

test('given withdraw of 115 should return note(s): [5, 10, 100]', () => {
    expect(withdraw(115)).toEqual(expect.arrayContaining([5, 10, 100]));
});

test('given withdraw of 120 should return note(s): [20, 100]', () => {
    expect(withdraw(120)).toEqual(expect.arrayContaining([20, 100]));
});

test('given withdraw of 125 should return note(s): [5, 20, 100]', () => {
    expect(withdraw(125)).toEqual(expect.arrayContaining([5, 20, 100]));
});

test('given withdraw of 150 should return note(s): [50, 100]', () => {
    expect(withdraw(150)).toEqual(expect.arrayContaining([50, 100]));
});

test('given withdraw of 155 should return note(s): [5, 50, 100]', () => {
    expect(withdraw(155)).toEqual(expect.arrayContaining([5, 50, 100]));
});

test('given withdraw of 175 should return note(s): [5, 20, 50, 100]', () => {
    expect(withdraw(175)).toEqual(expect.arrayContaining([5, 20, 50, 100]));
});

test('given withdraw of 205 should return note(s): [5, 200]', () => {
    expect(withdraw(205)).toEqual(expect.arrayContaining([5, 200]));
});

test('given withdraw of 215 should return note(s): [5, 10, 200]', () => {
    expect(withdraw(215)).toEqual(expect.arrayContaining([5, 10, 200]));
});

test('given withdraw of 220 should return note(s): [20, 200]', () => {
    expect(withdraw(220)).toEqual(expect.arrayContaining([20, 200]));
});

test('given withdraw of 225 should return note(s): [5, 20, 200]', () => {
    expect(withdraw(225)).toEqual(expect.arrayContaining([5, 20, 200]));
});

test('given withdraw of 230 should return note(s): [10, 20, 200]', () => {
    expect(withdraw(230)).toEqual(expect.arrayContaining([10, 20, 200]));
});

test('given withdraw of 240 should return note(s): [20, 20, 200]', () => {
    expect(withdraw(240)).toEqual(expect.arrayContaining([20, 20, 200]));
});

test('given withdraw of 250 should return note(s): [50, 200]', () => {
    expect(withdraw(250)).toEqual(expect.arrayContaining([50, 200]));
});

test('given withdraw of 300 should return note(s): [100, 200]', () => {
    expect(withdraw(300)).toEqual(expect.arrayContaining([100, 200]));
});

test('given withdraw of 500 should return note(s): [100, 200, 200]', () => {
    expect(withdraw(500)).toEqual(expect.arrayContaining([100, 200, 200]));
});

test('given withdraw of 333 should throw error', () => {
    expect(() => { withdraw(333) }).toThrow()
});