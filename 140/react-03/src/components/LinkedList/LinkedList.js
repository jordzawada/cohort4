import React, { useEffect } from 'react';
import LinkedList from './LinkedListObjects';
import ListCard from './ListCard';

let linkedList1= new LinkedList();
linkedList1.insert("a",100);
linkedList1.insert("b",200);
linkedList1.insert("c",300);
// console.log(linkedList1);

function LinkedListApp() {
    let [list, setList] = React.useState([]);
    // const [positon, setPosition] = React.useState(0);
    let cards=[];
    let size= linkedList1.getLast();
    for (let i=0;i<=size;i++){
            cards.push(<ListCard subject={linkedList1.get(i)[0]} amount={linkedList1.get(i)[1]} key={i}/>)
        }
    const makeList=()=>{
        setList(cards);
    };
    
        return(
            <div>
                <h1>Linked List</h1>
                <button onClick={makeList}>Load</button>
                <div>{list}</div>
                <h1>↓</h1>
            </div>
        );
    }

export default LinkedListApp;