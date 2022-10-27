import {capitalizeFirstLetter, concatenate, returnSecondWord} from './stringFunctions.js'

describe('string module', () => {
    // Capitalization
    describe('capitalization tests', () => {
        it('Capitalizes a in apple to be Apple', () => {
            expect(capitalizeFirstLetter("apple")).toBe('Apple');
        });
    
        it('If first char is not a letter, throw error', () => {
            expect(() => capitalizeFirstLetter("@apple")).toThrowError(Error);
        });

        it('If string is empty, throw error', () => {
            expect(() => capitalizeFirstLetter("")).toThrowError(Error);
        });
    });

    // Concatentation
    describe('concatenation tests', () => {
        it('Concatenates foo and bar to be foobar', () => {
            expect(concatenate("foo", "bar")).toBe("foobar");
        });

        it("Concatenates integers 1 and 2 to be '12'", () => {
            expect(concatenate(1,2)).toBe("12");
        })

        it("Concatenates integers 1 and 2 to not be 3", () => {
            expect(concatenate(1,2)).not.toBe(3);
        })
    });

    // Second Word
    describe('second word tests', () => {
        it('Returns second word from string equal to World', () => {
            expect(returnSecondWord("Hello World")).toBe("World");
        });
    
        it('If only one word, throws error', () => {
            expect(() => returnSecondWord("Hello")).toThrowError(Error);
        })
        
        it('If empty string, throws error', () => {
            expect(() => returnSecondWord("")).toThrowError(Error);
        })
    });

});