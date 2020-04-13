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
        let moveValue = Number(e.parentNode.childNodes[1].value);
        let keyPull = Number(e.parentNode.parentNode.parentNode.getElementsByClassName('clKey')[0].textContent);
        let data = await functions.getCities(url);
        await functions.postData('http://127.0.0.1:5000/clear');
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].key);
            Community1.createCity(
              data[i].Name,
              data[i].Latitude,
              data[i].Longitude,
              data[i].Population
            );
            console.log(Community1.data[i]);
            if (data[i].key===keyPull){
               console.log(data[i].Population);
                Community1.data[i].movedIn(moveValue);
                console.log(data[i].Population);
            }
            await functions.postData(urlAdd, Community1.data[i]);
          }
        e.parentNode.childNodes[1].value="";
    }
}

document.body.addEventListener('click',funcs);
