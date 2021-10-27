const withdraw = require('../../src/core/cashmachine.js');

const WITHDRAW_CASES = [
    // One note cases
    { givenWithdrawOf: 5, shouldReturnNotes: [5] }
    , { givenWithdrawOf: 10, shouldReturnNotes: [10] }
    , { givenWithdrawOf: 20, shouldReturnNotes: [20] }
    , { givenWithdrawOf: 50, shouldReturnNotes: [50] }
    , { givenWithdrawOf: 100, shouldReturnNotes: [100] }
    , { givenWithdrawOf: 200, shouldReturnNotes: [200] }

    // 15 until 95 cases
    , { givenWithdrawOf: 15, shouldReturnNotes: [5, 10] }
    , { givenWithdrawOf: 25, shouldReturnNotes: [5, 20] }
    , { givenWithdrawOf: 30, shouldReturnNotes: [10, 20] }
    , { givenWithdrawOf: 35, shouldReturnNotes: [5, 10, 20] }
    , { givenWithdrawOf: 40, shouldReturnNotes: [20, 20] }
    , { givenWithdrawOf: 45, shouldReturnNotes: [5, 20, 20] }
    , { givenWithdrawOf: 55, shouldReturnNotes: [5, 50] }
    , { givenWithdrawOf: 60, shouldReturnNotes: [10, 50] }
    , { givenWithdrawOf: 65, shouldReturnNotes: [5, 10, 50] }
    , { givenWithdrawOf: 70, shouldReturnNotes: [20, 50] }
    , { givenWithdrawOf: 75, shouldReturnNotes: [5, 20, 50] }
    , { givenWithdrawOf: 80, shouldReturnNotes: [10, 20, 50] }
    , { givenWithdrawOf: 85, shouldReturnNotes: [5, 10, 20, 50] }
    , { givenWithdrawOf: 90, shouldReturnNotes: [20, 20, 50] }
    , { givenWithdrawOf: 95, shouldReturnNotes: [5, 20, 20, 50] }

    // 105 until 195 cases
    , { givenWithdrawOf: 105, shouldReturnNotes: [5, 100] }
    , { givenWithdrawOf: 110, shouldReturnNotes: [10, 100] }
    , { givenWithdrawOf: 115, shouldReturnNotes: [5, 10, 100] }
    , { givenWithdrawOf: 120, shouldReturnNotes: [20, 100] }
    , { givenWithdrawOf: 125, shouldReturnNotes: [5, 20, 100] }
    , { givenWithdrawOf: 130, shouldReturnNotes: [10, 20, 100] }
    , { givenWithdrawOf: 135, shouldReturnNotes: [5, 10, 20, 100] }
    , { givenWithdrawOf: 140, shouldReturnNotes: [20, 20, 100] }
    , { givenWithdrawOf: 145, shouldReturnNotes: [5, 20, 20, 100] }
    , { givenWithdrawOf: 150, shouldReturnNotes: [50, 100] }
    , { givenWithdrawOf: 155, shouldReturnNotes: [5, 50, 100] }
    , { givenWithdrawOf: 160, shouldReturnNotes: [10, 50, 100] }
    , { givenWithdrawOf: 165, shouldReturnNotes: [5, 10, 50, 100] }
    , { givenWithdrawOf: 170, shouldReturnNotes: [20, 50, 100] }
    , { givenWithdrawOf: 175, shouldReturnNotes: [5, 20, 50, 100] }
    , { givenWithdrawOf: 180, shouldReturnNotes: [10, 20, 50, 100] }
    , { givenWithdrawOf: 185, shouldReturnNotes: [5, 10, 20, 50, 100] }
    , { givenWithdrawOf: 190, shouldReturnNotes: [20, 20, 50, 100] }
    , { givenWithdrawOf: 195, shouldReturnNotes: [5, 20, 20, 50, 100] }

    // 205 until 295 cases
    , { givenWithdrawOf: 205, shouldReturnNotes: [5, 200] }
    , { givenWithdrawOf: 210, shouldReturnNotes: [10, 200] }
    , { givenWithdrawOf: 215, shouldReturnNotes: [5, 10, 200] }
    , { givenWithdrawOf: 220, shouldReturnNotes: [20, 200] }
    , { givenWithdrawOf: 225, shouldReturnNotes: [5, 20, 200] }
    , { givenWithdrawOf: 230, shouldReturnNotes: [10, 20, 200] }
    , { givenWithdrawOf: 235, shouldReturnNotes: [5, 10, 20, 200] }
    , { givenWithdrawOf: 240, shouldReturnNotes: [20, 20, 200] }
    , { givenWithdrawOf: 245, shouldReturnNotes: [5, 20, 20, 200] }
    , { givenWithdrawOf: 250, shouldReturnNotes: [50, 200] }
    , { givenWithdrawOf: 255, shouldReturnNotes: [5, 50, 200] }
    , { givenWithdrawOf: 260, shouldReturnNotes: [10, 50, 200] }
    , { givenWithdrawOf: 265, shouldReturnNotes: [5, 10, 50, 200] }
    , { givenWithdrawOf: 270, shouldReturnNotes: [20, 50, 200] }
    , { givenWithdrawOf: 275, shouldReturnNotes: [5, 20, 50, 200] }
    , { givenWithdrawOf: 280, shouldReturnNotes: [10, 20, 50, 200] }
    , { givenWithdrawOf: 285, shouldReturnNotes: [5, 10, 20, 50, 200] }
    , { givenWithdrawOf: 290, shouldReturnNotes: [20, 20, 50, 200] }
    , { givenWithdrawOf: 295, shouldReturnNotes: [5, 20, 20, 50, 200] }

    // 305 until 395 cases
    , { givenWithdrawOf: 305, shouldReturnNotes: [5, 100, 200] }
    , { givenWithdrawOf: 310, shouldReturnNotes: [10, 100, 200] }
    , { givenWithdrawOf: 315, shouldReturnNotes: [5, 10, 100, 200] }
    , { givenWithdrawOf: 320, shouldReturnNotes: [20, 100, 200] }
    , { givenWithdrawOf: 325, shouldReturnNotes: [5, 20, 100, 200] }
    , { givenWithdrawOf: 330, shouldReturnNotes: [10, 20, 100, 200] }
    , { givenWithdrawOf: 335, shouldReturnNotes: [5, 10, 20, 100, 200] }
    , { givenWithdrawOf: 340, shouldReturnNotes: [20, 20, 100, 200] }
    , { givenWithdrawOf: 345, shouldReturnNotes: [5, 20, 20, 100, 200] }
    , { givenWithdrawOf: 350, shouldReturnNotes: [50, 100, 200] }
    , { givenWithdrawOf: 355, shouldReturnNotes: [5, 50, 100, 200] }
    , { givenWithdrawOf: 360, shouldReturnNotes: [10, 50, 100, 200] }
    , { givenWithdrawOf: 365, shouldReturnNotes: [5, 10, 50, 100, 200] }
    , { givenWithdrawOf: 370, shouldReturnNotes: [20, 50, 100, 200] }
    , { givenWithdrawOf: 375, shouldReturnNotes: [5, 20, 50, 100, 200] }
    , { givenWithdrawOf: 380, shouldReturnNotes: [10, 20, 50, 100, 200] }
    , { givenWithdrawOf: 385, shouldReturnNotes: [5, 10, 20, 50, 100, 200] }
    , { givenWithdrawOf: 390, shouldReturnNotes: [20, 20, 50, 100, 200] }
    , { givenWithdrawOf: 395, shouldReturnNotes: [5, 20, 20, 50, 100, 200] }

    // Other cases
    , { givenWithdrawOf: 500, shouldReturnNotes: [100, 200, 200] }
    , { givenWithdrawOf: 1000, shouldReturnNotes: [200, 200, 200, 200, 200] },
    , { givenWithdrawOf: 1355, shouldReturnNotes: [5, 50, 100, 200, 200, 200, 200, 200, 200] }
    , { givenWithdrawOf: 1365, shouldReturnNotes: [5, 10, 50, 100, 200, 200, 200, 200, 200, 200] }
    , { givenWithdrawOf: 1800, shouldReturnNotes: [200, 200, 200, 200, 200, 200, 200, 200, 200] }
]

WITHDRAW_CASES.forEach(({ givenWithdrawOf, shouldReturnNotes }) => {
    it(`given withdraw of ${givenWithdrawOf} should note(s): ${shouldReturnNotes}`, () => {
        expect(withdraw(givenWithdrawOf)).toEqual(expect.arrayContaining(shouldReturnNotes));
    });
})

// test('given withdraw of 333 should throw error', () => {
//     expect(() => { withdraw(333) }).toThrow()
// });
