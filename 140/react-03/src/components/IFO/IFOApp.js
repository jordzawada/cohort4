import React, { useEffect } from 'react';
import IFO from './IFOobjects.js';
import IFOCard from './IFOCard.js';

let ifo= new IFO ()
ifo.addToFIFO("test1");
ifo.addToLIFO("test1");

function IFOApp() {
    let [FIFOcards, setFIFOcards] = React.useState([])
    let [LIFOcards, setLIFOcards] = React.useState([])
    
    const renderLIFO=()=>{
        let LIFOarr=[];
        let size=ifo.lifo.length;
        for (let i=0;i<size;i++){
            LIFOarr.push(<IFOCard name={ifo.lifo[i].name}/>)
        } 
        setLIFOcards(LIFOarr);
    }
    const renderFIFO=()=>{
        let FIFOarr=[];
        let size=ifo.fifo.length;
        for (let i=0;i<size;i++){
            FIFOarr.push(<IFOCard name={ifo.fifo[i].name}/>)
        }
        setFIFOcards(FIFOarr);
    }
    const mount = () => {
        console.log('mounted')
        renderFIFO();
        renderLIFO();
      
        const unmount = () => {
          console.log('unmounted');
          ifo= new IFO();
          // ...
        }
        return unmount
      }
      useEffect(mount,[])
      
    
        return(
            <div id="idIFO">
                
               <div id="idInnerIFO"> 
               <h1>FIFO</h1> 
               {LIFOcards}
               </div>
               <div> <h1>Middle</h1> </div>

               <div id="idInnerIFO"> 
               <h1>LIFO</h1> 
               {FIFOcards}
               </div>
                
            </div>
        );
    }
export default IFOApp;