import functions from './cities.js'
import {City,Community} from './cities.js';
const url ='http://127.0.0.1:5000/all';
const urlAdd='http://127.0.0.1:5000/add';

const Community1 = new Community();

async function startPress() {
    const data = functions.onLoad(url).then();
    // const Community1= await data;
    // console.log(await data);
    return await data;
}
startPress();

async function funcs(){
     if (event.target.id==="save") {
         // make something to combo your two community arrays
        // console.log(Community1.data);
        let size = Community1.data.length;
        for (let i=0;i<size;i++){
         functions.postData(urlAdd, Community1.data[i])
        }
        // functions.updateUI()
    }  else if (event.target.id==="add"){
        let name =document.getElementsByName('name')[0].value;
        let lat =document.getElementsByName('lat')[0].value;
        let long =document.getElementsByName('long')[0].value;
        let pop =document.getElementsByName('pop')[0].value;
        Community1.createCity(name,lat,long,pop);
    //     let size = Community1.data[0].howBig();
    //     let sphere = Community1.data[0].whichSphere();
        functions.createCard('cardDiv',name, lat,long,pop,"reload","reload");   
    } 
}

document.body.addEventListener('click',funcs);
