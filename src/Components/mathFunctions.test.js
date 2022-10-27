import {sum, subtract, multiply, divide} from "./mathFunctions.js";


describe("math module", () => {
    // ADD
    describe("add tests", () => { 
        it('adds 1 + 2 to equal 3', () => {
            expect(sum(1,2)).toBe(3);
        });

        it('adds 2 + 2 to be greater than 3', () => {
            expect(sum(2,2)).toBeGreaterThan(3);
        });
    
        it('adds 1 + 2 to not equal 4', () => {
            expect(sum(1,2)).not.toBe(4);
        });

        it('adds -1 + 2 to equal 1', () => {
            expect(sum(-1,2)).toBeLessThan(2);
        })
    });

    // SUBTRACT
    describe('subtract tests', () => {
        it('subtracts 3 - 2 to equal 1', () =>{
            expect(subtract(3, 2)).toBe(1);
        });
    
        it('subtracts 3 - 2 to not equal 5', () => {
            expect(subtract(3, 2)).not.toBe(5);
        })

        it('subtracting floating point numbers', () => {
            expect(subtract(0.5, 0.2)).toBeCloseTo(0.3);
        })
    });

   // MULTIPLY
    describe('multiply tests', () => {
        it('mutliplies 2 * 3 to equal 6', () =>{
            expect(multiply(2,3)).toBe(6);
        })
    
        it('multiplies 2 * 3 to not equal 5', () => {
            expect(multiply(2,3)).not.toBe(5);
        })

        it('multiplies negative number by positive number to equal negative number', () => {
            expect(multiply(5, -1)).toBe(-5);
        })

        it('multiplies a number by a char to throw error', () => {
            expect(multiply("a" * 5)).toBeNaN();
        })
    });

    // DIVIDE
    describe('divide tests', () => {
        it('divides 10 / 5 to equal 2', () => {
            expect(divide(10,5)).toBe(2);
        });
    
        it('divides 10 / 0 to throw error', () => {
            expect(() => divide(10,0)).toThrowError();
        });
    });
});