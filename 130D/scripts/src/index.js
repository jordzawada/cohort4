import functions from './cities.js'
import {City,Community} from './cities.js'

let url ='http://127.0.0.1:5000/all'
let data = functions.getCities(url)
const Community1= new Community();

async function testFunc1(event) {
    let e= event.target;
    console.log(await Community1.data);
    console.log(await Community1.data[1]);
    // console.log(await Community2.data);
    // console.log(await Community2.data[1]);
    await Community1.data[0].show();
}

document.body.addEventListener('click',testFunc1);