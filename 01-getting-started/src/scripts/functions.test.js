import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    // expect(functions.size(2000000)).toBe("large");
    // expect(functions.size(-101)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does that multiply function work?', () => {
    expect(functions.multiply(1,2)).toBe(2);
    expect(functions.multiply(5,2)).toBe(10);  
});

test('Does that divide function work?', () => {
    expect(functions.divide(6,2)).toBe(3); 
});

test('Does that isEven function work?', () => {
    expect(functions.isEven(2)).toBe(true);
    expect(functions.isEven(1)).toBe(false);
    expect(functions.isEven(4)).toBe(true);
    expect(functions.isEven(5)).toBe(false);    
});

test('Does that taxes function work?', () => {
    expect(functions.taxes(1.00)).toBe(0.15);
    expect(functions.taxes(2.00)).toBe(0.3);
    expect(functions.taxes(50000)).toBe(7580.78);
    expect(functions.taxes(100000)).toBe(17991.78);
    expect(functions.taxes(150000)).toBe(30991.78);
    expect(functions.taxes(250000)).toBe(61402.87);
});

test('Do the array functions work?', () => {
    expect(functions.arraysAddTo(2)).toBe(2);
    expect(functions.arraysAddTo(3)).toBe(3);
    expect(functions.arraysAddTo("a")).toBe("Not a valid Number");
    expect(functions.arraysShow([1,2])).toBe("1,2");
    expect(functions.arraysShow([1,2,3])).toBe("1,2,3");
    expect(functions.arraysTotal([1,2,3])).toBe(6);
    expect(functions.arraysTotal([1,2,3,4])).toBe(10);
    expect(functions.arraysClear([1,2,3,4])).toStrictEqual([]);
    expect(functions.arraysClear([1,2,3])).toStrictEqual([]);
});