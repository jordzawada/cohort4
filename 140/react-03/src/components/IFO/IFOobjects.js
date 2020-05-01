
class Node{
    constructor(name){
        this.name=name;
    }
}



class IFO {
    constructor(){
        this.lifo=[];
        this.fifo=[];
    }

    newNode(name){
        let node= new Node(name);
        return node;    
    }

    addToLIFO(name){
        let newNode =this.newNode(name);
        this.lifo.push(newNode);
    }
    removeLIFO(){
        this.lifo.pop();
    }

    addToFIFO(name){
        let newNode =this.newNode(name);
        this.fifo.push(newNode);
    }
    removeFIFO(){
        this.fifo.shift();
    }


}

export default IFO;