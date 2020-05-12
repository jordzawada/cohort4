import React, { useEffect } from 'react';
import IFO from './IFOobjects.js';
import IFOCard from './IFOCard.js';
import IFOhighlight from './IFOhighlight.js';
import WFWeapons from "./WFweapons.json";



let ifo= new IFO ();


let randWeapons = WFWeapons;

function IFOApp() {
    let [FIFOcards, setFIFOcards] = React.useState([])
    let [LIFOcards, setLIFOcards] = React.useState([])
    let [name, setName] =React.useState("");
    let [last, setLast] =React.useState();


    const randomName =()=>{
        let size = randWeapons.length;
        let x = Math.round(Math.random()*(size-1));
        let weapon=randWeapons[x].name;
        name=setName(weapon)
    }


    const handleNameChange=(e)=>{
        name=setName(e.target.value)
    }

    const handleAddFIFOClick=()=>{
        if (name!==""){
            ifo.addToFIFO(name);
            name=setName("");
            renderFIFO();  
        }
    }
    const handleRemoveFIFOClick=()=>{
        if(ifo.fifo.length-1!==-1) {
            last=setLast(<IFOCard name={ifo.fifo[0].name} />)
            ifo.removeFIFO();
        }
            renderFIFO();  
    }

    const handleAddLIFOClick=()=>{
        if (name!==""){
            ifo.addToLIFO(name);
            name=setName("");
            renderLIFO();  
        }
    }
    const handleRemoveLIFOClick=()=>{
        let size = ifo.lifo.length-1;
        if(size!==-1){
            last=setLast(<IFOCard name={ifo.lifo[size].name} />)
            ifo.removeLIFO();
        }
        
        renderLIFO();  
}


    const renderLIFO=()=>{
        let LIFOarr=[];
        let size=ifo.lifo.length;
        for (let i=0;i<size;i++){
            if(i!==size-1){
            LIFOarr.push(<IFOCard name={ifo.lifo[i].name} key={ifo.lifo[i].key}/>)
            } else {
                LIFOarr.push(<IFOhighlight name={ifo.lifo[i].name} key={ifo.lifo[i].key}/>)
            }
        } 
        setLIFOcards(LIFOarr);
    }
    const renderFIFO=()=>{
        let FIFOarr=[];
        let size=ifo.fifo.length;
            for (let i=0;i<size;i++){
                if(i!==size-1){
                FIFOarr.push(<IFOCard name={ifo.fifo[i].name} key={ifo.fifo[i].key}/>)
                } else {
                    FIFOarr.push(<IFOhighlight name={ifo.fifo[i].name} key={ifo.fifo[i].key}/>)
                }
            }
            setFIFOcards(FIFOarr);
         
    }
    const mount = () => {
        // console.log('mounted');
        renderFIFO();
        renderLIFO();
      
        const unmount = () => {
        //   console.log('unmounted');
          ifo= new IFO();
          // ...
        }
        return unmount
      }
      useEffect(mount,[])
      
    
        return(
            <div id="idIFO">
                {/* <p>{time.time1}</p> */}
               <div id="idInnerIFO"> 
               <h1>FIFO</h1> 
               <p>First In, First Out.</p>
               <button onClick={handleRemoveFIFOClick}>Remove From FIFO queue</button>
               {FIFOcards}
               </div>
               <div id="idInnerIFO"> 
               <h1>Middle</h1> 
               <input value={name} onChange={handleNameChange}></input>
               <button id="idRandName" onClick={randomName}>Random Name</button>
               <hr/>
               <button onClick={handleAddFIFOClick}>Add to FIFO queue</button>
               <button id="idLIFO" onClick={handleAddLIFOClick}>Add to LIFO queue</button>
               <hr/>
               <p id="idRem">Removed</p>
               {last}
               </div>

               <div id="idInnerIFO"> 
               <h1>LIFO</h1> 
               <p>Last In, First Out.</p>
               <button onClick={handleRemoveLIFOClick}>Remove From LIFO queue</button>
               {LIFOcards}
               </div>
                
            </div>
        );
    }


export default IFOApp;