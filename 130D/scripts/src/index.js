import functions from './cities.js'
import {City,Community} from './cities.js';

const url ='http://127.0.0.1:5000/all';
const urlAdd='http://127.0.0.1:5000/add';
const Community1 = functions.onLoad(url);
// const Community1= functions.onLoad(url); 
// functions.updateCards(Community1);
// console.log(Community1.data[0].hasOwnProperty("key"));
// console.log(JSON.stringify(Community1.data));

async function funcs(){
    
     if (event.target.id==="save") {
        //  console.log(await Community1);
        await functions.postData(urlAdd, await Community1)
    } else if (event.target.id==="add"){
        let name =document.getElementsByName('name')[0].value;
        let lat =document.getElementsByName('lat')[0].value;
        let long =document.getElementsByName('long')[0].value;
        let pop =document.getElementsByName('pop')[0].value;
        functions.createCard('cardDiv',name, lat,long,pop);
        console.log(await Community1);
        console.log(await typeof(Community1));
        await Community1.createCity(name,lat,long,pop);
        console.log(await Community1);        
    } 
}

document.body.addEventListener('click',funcs);
// document.body.addEventListener('onclick',functions.updateCards(Community1));