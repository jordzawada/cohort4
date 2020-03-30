import functions from './cities.js'
import {City,Community} from './cities.js'

const url ='http://127.0.0.1:5000/all';
const urlAdd='http://127.0.0.1:5000/add'
let data = functions.getCities(url);
const Community1= new Community();

function openCity(cityName) {
    fucntions.openCity(cityName)
}


Community1.createCity('test1');
Community1.createCity('test2');
Community1.objectification();
// console.log(Community1.data[0].hasOwnProperty("key"));
// console.log(JSON.stringify(Community1.data));

async function testFunc1() {
    const e= event.target;
    console.log(e.id);
    // console.log(await Community1.data);
    // console.log(await Community2.data);
    // console.log(await Community2.data[1]);
    // await Community1.data[0].show();
}

const funcs =()=>{
        // testFunc1();
     if (event.target.id==="save") {
        functions.postToServer(urlAdd, Community1.data);
    } else if (event.target.id==="add"){
        functions.createCard('cardDiv')
        console.log("added");  
    } else if (event.target.id==="info"||event.target.id==="settings"){
        fucntions.openCity(event.target.id)
    }

}

document.body.addEventListener('click',funcs);