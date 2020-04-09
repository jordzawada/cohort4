import functions from './cities.js'
import {City,Community} from './cities.js';
const url ='http://127.0.0.1:5000/all';
const urlAdd='http://127.0.0.1:5000/add';

const Community1 = new Community();
functions.onLoad(url);
async function funcs(){ 
    const e= event.target.id;
     if (e==="add"){
         functions.newCity(urlAdd, Community1);   
    } else if(e==="deleteCity") {
        functions.deleteCity ();
        let x= event.target.parentNode.parentNode.parentNode;
        x.remove();
    }
}

document.body.addEventListener('click',funcs);
