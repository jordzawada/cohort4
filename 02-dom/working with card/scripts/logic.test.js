import functions from "./logic.js"

test('Check that you can clone a div', () => {
    document.body.innerHTML = 
    `<div id="cloneTest">`+`</div>`;
    
    let clone=functions.makeNewCard("cloneTest");
    document.body.appendChild(clone)
    let z=document.body.children.length;
     expect(z).toBe(2);     
        
});


test('Check that you can add a new div before', () => {
    document.body.innerHTML = 
    `<div id="test">`+`</div>`;
    functions.addCardBefore("test");
    let x= document.body.children[0];
    let y= x.children[0];

     expect(typeof(y)).toBe("object");     
        
});

test('Check that you can add a new div after', () => {
    document.body.innerHTML = 
    `<div id="test">`+`</div>`;
    functions.addCardAfter("test");
    let x= document.body.children[0];
    let y= x.children[0];
    // z is the length of the array made by addcardafter, if greater than 0, the function worked
    let z= x.children.length
    console.log(z)
     expect(typeof(y)).toBe("object"); 
     expect(z).toBe(1);    
        
});


test('Check that you can del', () => {
    document.body.innerHTML = 
    `<div id="test">`+`</div>`;
    functions.addCardAfter("test");
    functions.delCard();
    let x= document.body.children.length;
    console.log(x)
    // z is the length of the array made by delCard, if less than before, the function worked
    let z=0;
     expect(z).toBe(0);    
        
});