import functions from "./logic.js"

test('Check that you can add a new div', () => {
    document.body.innerHTML = 
    `<div id="test">`+`</div>`;

    function addDiv(node, text){
        let div = document.createElement(node);
        const textNode= document.createTextNode(text);
        div.textnode;
        return div;
        }

        // const div = document.createElement('div');
        addDiv("div", 'one');
        // console.log(document.getElementById("test"));  
        expect().toBe(); 
});

test('Check that you can copy the contents of a specific ID`d div into', () => {
    document.body.innerHTML = 
    `<div id="test1">`
    +`</div>`
    + `<div id="test2">`
    +`</div>`;
    
    document.getElementById("test1").innerHTML= "test1";
    
    document.getElementById("test2").innerHTML= "test2";
    // console.log(document.getElementById("test2").innerHTML); 

    document.getElementById("test2").innerHTML =   document.getElementById("test1");
    console.log(document.getElementById("test1"));  
});
