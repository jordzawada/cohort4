import functions from './cities.js'
import {City,Community} from './cities.js';
const url ='http://127.0.0.1:5000/all';
const urlAdd='http://127.0.0.1:5000/add';

const Community1 = new Community();
functions.onLoad(url);

async function funcs(){
    const e= event.target;
     if (e.id==="add"){
         await functions.newCity(urlAdd, Community1); 
    } else if(e.id==="deleteCity") {
        let key = e.parentNode.childNodes[2].textContent;
        functions.deleteCity(Number(key));
        let x= e.parentNode.parentNode.parentNode;
        x.remove();
    }else if(e.id==="moveIn") {
        let keyPull = Number(e.parentNode.parentNode.parentNode.getElementsByClassName('clKey')[0].textContent);
        let moveValue = Number(e.parentNode.childNodes[1].value);
        functions.moveIn(keyPull,moveValue);
    }  else if(e.id==="moveOut") {
        let keyPull = Number(e.parentNode.parentNode.parentNode.getElementsByClassName('clKey')[0].textContent);
        let moveValue = Number(e.parentNode.childNodes[4].value);
        functions.moveOut(keyPull,moveValue);
    } 
}

document.body.addEventListener('click',funcs);
