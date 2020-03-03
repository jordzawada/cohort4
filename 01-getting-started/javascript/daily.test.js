import functions from './daily.js';

test('Does that convert function work?', () => {
    expect(functions.convertToFahrenheit(60)).toBe(16);
    expect(functions.convertToFahrenheit(0)).toBe(-18);
});