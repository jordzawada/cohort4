import functions from './syntax'

test ('testing section 1 stuff', () =>{
    expect(functions.fun1()).toBe(5);
    expect(functions.fun2()).toBe("Hello you");
    expect(functions.fun3()).toBe(false);
    expect(functions.fun4()).not.toBe(0);
});

test ('testing section 2 stuff', () =>{
    expect(functions.fun5()).toBe("object");
    expect(functions.fun6()).toBe(undefined);
});

test ('testing section 3 stuff', () =>{
    expect(functions.fun7(5)).toBe("odd");
    expect(functions.fun7(4)).toBe("even");
    expect(functions.fun8(4,4)).toBe(8);
    expect(functions.fun8(6,4)).toBe(10);
});

test ('testing section 4 stuff', () =>{
    expect(functions.fun9(0)).toBe(0);
    expect(functions.fun9(1)).toBe(1);
    expect(functions.fun10(1)).toBe(1);
    expect(functions.fun10("geroge")).toBe("geroge");
    expect(functions.fun11(1,1)).toBe(1);
    expect(functions.fun11(2,3)).toBe(3); 
});

test ('testing section 5 stuff', () =>{
    expect(functions.fun12(5)).toBe(15);
    expect(functions.fun12(3)).toBe(6);
    expect(functions.fun13(5)).toBe(5);
    expect(functions.fun13(4)).toBe(4);
    expect(functions.fun14(4)).toBe(10);
    expect(functions.fun14(5)).toBe(15);
    expect(functions.fun15(2)).toBe("12");
    expect(functions.fun15(3)).toBe("123");
    expect(functions.fun16(2)).toBe(2);
    expect(functions.fun16(3)).toBe(3);
});

test ('testing section 2 stuff', () =>{
    expect(functions.fun17()).toBe("jerry");
    
});
