import functions from './cities.js'
import {City,Community} from './cities.js'

const url ='http://127.0.0.1:5000/all';
const urlAdd='http://127.0.0.1:5000/add';
const Community1= functions.onLoad(url);
functions.updateCards(Community1)
// console.log(Community1.data[0].hasOwnProperty("key"));
// console.log(JSON.stringify(Community1.data));



async function testFunc1() {
    const e= event.target;   
}
 
async function funcs(){
        testFunc1();
     if (event.target.id==="save") {
         console.log(await Community1);
        await functions.postToServer(urlAdd, await Community1)
    } else if (event.target.id==="add"){
        functions.createCard('cardDiv');
    } 
    
}

document.body.addEventListener('click',funcs);
document.body.addEventListener('load',functions.updateCards);