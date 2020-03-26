import {City} from './cities.js'

const NewCity= new City("test1",45.6,75.4,90000);

const testFunc1 = (event) => {
    let e= event.target;
    console.log(e)
    NewCity.show();
}

document.body.addEventListener('click',testFunc1);