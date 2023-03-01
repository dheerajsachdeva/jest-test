const Calculator = require ('./calculator')

describe('Calculator', () => {
    test('Add', () => {
        const calc = new Calculator();
        expect(calc.add(4,5)).toBe(9);
    });

    test('subtract', () => {
        const calc = new Calculator();
        expect(calc.subtract(8,4)).toBe(4);
    });

    test('multiply', () => {
        const calc = new Calculator();
        expect(calc.multiply(4,5)).toBe(20);
    });

    test('divide', () => {
        const calc = new Calculator();
        expect(calc.divide(9,3)).toBe(3);
    });

});