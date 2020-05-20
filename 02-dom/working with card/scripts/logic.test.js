import functions from "./logic.js"

test('Check that you can clone a div', () => {
    let webpage1 =document.body;
    expect(webpage1.children.length).toBe(0);
    webpage1.innerHTML = 
    `<div id="cloneTest">`+`</div>`;
    expect(webpage1.children.length).toBe(1);
    let newNode = document.createElement('div')
    webpage1.appendChild(newNode)
    expect(webpage1.children.length).toBe(2); 
    expect(functions.counter).toBe(1);
    let toClone= document.getElementById("cloneTest")
    let clone=functions.makeNewCard(toClone);
    expect(functions.counter).toBe(2);
    webpage1.appendChild(clone)
    let z=webpage1.children.length;
     expect(z).toBe(3);     
});


test('Check that you can add a new div before', () => {
    functions.counter=1;
    let webpage2 =document.body;
    webpage2.innerHTML='';
    expect(webpage2.children.length).toBe(0);

    let parentNode= document.createElement('div');
    parentNode.id="Test1";
    webpage2.appendChild(parentNode);

    expect(webpage2.children.length).toBe(1);

    let childNode= document.createElement('div');
    childNode.className="childTest";
    childNode.id="childTest";
    // add an h3 tag for naming
    let name= document.createElement('h3');
    name.textContent="test";
    childNode.appendChild(name);
    
    let newButton= document.createElement('button');
    newButton.id="press me";
    childNode.appendChild(newButton);

    let getTest1= document.getElementById("Test1");

    expect(getTest1.children.length).toBe(0);
    getTest1.appendChild(childNode);   
    expect(getTest1.children.length).toBe(1);

    const clicky =()=>{
        functions.addCardBefore( document.getElementById("press me"))
    }
    getTest1.addEventListener('click',clicky);

    let counterNumber = document.getElementsByClassName("childTest")[0].textContent;
    expect(counterNumber).toBe("test");

    getTest1.click();
    counterNumber = document.getElementsByClassName("childTest")[0].textContent;
    expect(counterNumber).toBe("This is Card 2");
    expect(getTest1.children.length).toBe(2);
     
    getTest1.click();
    counterNumber = document.getElementsByClassName("childTest")[0].textContent;
    expect(counterNumber).toBe("This is Card 2");
    expect(getTest1.children.length).toBe(3);

   
});

test('Check that you can add a new div after', () => {
    let webpage2 =document.body;
    webpage2.innerHTML='';
    // console.log(webpage2.children.length);
    expect(webpage2.children.length).toBe(0)
    webpage2.innerHTML = 
    `<div id="Test1">`+`</div>`;
    expect(webpage2.children.length).toBe(1)
    let childNode= document.createElement('button')
    childNode.id="childTest";
    // childNode.setAttribute('onclick',functions.addCardBefore);
    webpage2.appendChild(childNode);
    // document.getElementById("childTest").addEventListener('click',functions.addCardAfter)
        
});


// test('Check that you can del', () => {
//     document.body.innerHTML = 
//     `<div id="test">`+`</div>`;
//     // functions.addCardAfter("test");
//     functions.delCard();
//     let x= document.body.children.length;
//     console.log(x)
//     // z is the length of the array made by delCard, if less than before, the function worked
//     let z=0;
//      expect(z).toBe(0);    
        
// });