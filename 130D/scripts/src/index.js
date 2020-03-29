import functions from './cities.js'
import {City,Community} from './cities.js'

const url ='http://127.0.0.1:5000/all';
const urlAdd='http://127.0.0.1:5000/add'
let data = functions.getCities(url)
const Community1= new Community();
Community1.createCity('test1');
Community1.createCity('test2');
console.log(JSON.stringify(Community1.data));


async function testFunc1() {
    const e= event.target;
    // console.log(e);
    // console.log(await Community1.data);
    // console.log(await Community2.data);
    // console.log(await Community2.data[1]);
    // await Community1.data[0].show();
}
let data1={"key":"test"}
const funcs =()=>{
    if (event.target==="body"){
        testFunc1();
    } else if (event.target.id==="save") {
        functions.postToServer(urlAdd, Community1.data);
    }

}

document.body.addEventListener('click',funcs);