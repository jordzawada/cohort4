import React, { useEffect } from 'react';
import LinkedList from './LinkedListObjects';
import ListCard from './ListCard';

let linkedList1= new LinkedList();
// linkedList1.insert("a",100);
// linkedList1.insert("b",200);
// linkedList1.insert("c",300);
// console.log(linkedList1);

function LinkedListApp() {
    let [list, setList] = React.useState([]);
    const [position, setPosition] = React.useState(0);
    let [count, setCount] = React.useState(1);
    
    const handleGetPosition=(i)=>{
        setPosition(i);
    }
    const mount = () => {
        console.log('mounted')
        // ...
      
        const unmount = () => {
          console.log('unmounted');
          linkedList1= new LinkedList();
          // ...
        }
        return unmount
      }
    useEffect(mount,[])
    const makeList=()=>{
        let cards=[];
    let size= linkedList1.getLast();
    for (let i=0;i<=size;i++){
            cards.push(<ListCard 
                subject={linkedList1.get(i)[0]} 
                amount={linkedList1.get(i)[1]} 
                getPosition={handleGetPosition}
                key={i}  
                keys={i}/>)
        }
        setList(cards);
    };

    const deleteSelected=()=>{
        linkedList1.delete(position)
        makeList();
        if(position>0){
        setPosition(position-1);
        }
    }
    const clickNext=()=>{
        let size= linkedList1.getLast();
        if (position<size){
        setPosition(position+1);
        }
    }
    const clickPrev=()=>{
        if (position>0){
        setPosition(position-1);
        }
    }
    const insertAfter=()=>{
        linkedList1.insertAfter(position);
        makeList();
    }
    const addToEnd=()=>{
        linkedList1.insert(count,count*100);
        setCount(count+1);
        makeList();
    }
    
        return(
            <div>
                <h1>Linked List</h1>
                <h1>Position: {position} Selected</h1>
                <div id="idPrevNext">
                    <button onClick={clickPrev}>Previous</button>
                    <button onClick={clickNext}>Next</button>
                </div>
                <div>
                <button onClick={addToEnd}>Add To End</button>
                <button onClick={insertAfter}>Add After Current</button>
                <button onClick={deleteSelected}>Delete Selected</button>
                <hr/>
                </div>
                <div id="idLL">{list}</div>
                
            </div>
        );
    }
{/* <button onClick={makeList}>Load</button> */}
export default LinkedListApp;