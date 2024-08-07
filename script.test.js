/*
 * @jest-environment jsdom
*/

    const convertColorCode = require('./script');
    const resultOutput = require('./script');

    test('should return correct hex code for red', () => {
        expect(convertColorCode('red')).toBe(resultOutput('Hexadecimal Code: (#FF0000)'));
    });
    test('should return correct hex code for blue', () => {
        expect(convertColorCode('blue')).toBe(resultOutput('Hexadecimal Code: (#0000FF)'));
    });
    test('should return correct hex code for green', () => {
        expect(convertColorCode('green')).toBe(resultOutput('Hexadecimal Code: (#008000)'));
    });
    test('should return "Please enter a valid color" for unknown color', () => {
        expect(convertColorCode('unknowncolor')).toBe(resultOutput('Please enter a valid color'));
    });
    test('should return correct hex code for case-insensitive input', () => {
        expect(convertColorCode('rEd')).toBe(resultOutput('Hexadecimal Code: (#FF0000)'));
    });
    test('should return correct hex code for inputs with white space characters', () => {
        expect(convertColorCode(' red ')).toBe(resultOutput('Hexadecimal Code: (#FF0000)'));
    });
    