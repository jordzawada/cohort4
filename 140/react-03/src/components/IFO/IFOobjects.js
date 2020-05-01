

class Node{
    constructor(name,key){
        this.name=name;
        this.key=key;
    }
}



class IFO {
    constructor(){
        this.lifo=[];
        this.fifo=[];
        this.counter =0;
    }

    newNode(name){
        let node= new Node(name,this.counter);
        this.counter = this.counter+1;
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