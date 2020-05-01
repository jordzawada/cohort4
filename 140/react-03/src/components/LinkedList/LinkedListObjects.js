 class ListNode {
    constructor(data,amount) {
        this.data = data;
        this.next = null;
        this.amount=amount;
    }
    show(){
      // console.log(`subject: ${this.subject}, amount: ${this.amount}`);
      return [this.data,this.amount]
    }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.position=null;
  }

  insert(data,amount) {
    // create a new node
    const newNode = new ListNode(data,amount);
    //special case: no items in the list yet
    if (this.head === null) {
      // just set the head to the new node
      this.head = newNode;
    } else {
      // start out by looking at the first node
      let current = this.head;
      // follow `next` links until you reach the end
      while (current.next !== null) {
        current = current.next;
      }
      // assign the node into the `next` pointer
      current.next = newNode;
    }
  }
  get(index) {
    // ensure `index` is a positive value
    if (index > -1) {
      // the pointer to use for traversal
      let current = this.head;
      // used to keep track of where in the list you are
      let i = 0;
      // traverse the list until you reach either the end or the index
      while (current !== null && i < index) {
        current = current.next;
        i++;
      }
      // return the data if `current` isn't null
      return current !== null ? [current.data,current.amount] : undefined;
    } else {
      return undefined;
    }
  }
  // getNext(){

  // }
  // getPrev(){

  // }
  getLast(){
    let i=-1;
    let current = this.head;
    while (current !== null) {
      current = current.next;
      i++;
    }
    this.position=i;
    return i;
  }
  getFirst(){
    this.position=0;
  }
  getAt (index){
    let counter = 0;
    let node = this.head;
    while (node) {
        if (counter === index) {
           return node;
        }
        counter++;
        node = node.next;
    }
    return null;
}
  insertAfter(i,data,amount){
          // console.log("inserted after "+i);
          // if the list is empty i.e. head = null
          if (!this.head) {
            this.head = new ListNode(data,amount);
            return;
        }
      // if new node needs to be inserted at the front of the list i.e. before the head. 
        // if (i === 0) {
        //   this.next = new ListNode(data, amount);
        //   return;
        // }
      // else, use getAt() to find the previous node.
        const previous = this.getAt(i);
        let newNode = new ListNode(data, amount);
        newNode.next = previous.next;
        previous.next = newNode;       

        return this.head
      }

    delete(index) {  
    // special cases: empty list or invalid `index`
    if ((this.head === null) || (index < 0)) {
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }
    // special case: removing the first node
    if (index === 0) {
        // temporary store the data from the node
        const data = this.head.data;
        // just replace the head with the next node in the list
        this.head = this.head.next;
        // return the data at the previous head of the list
        return data;
    }
    // pointer use to traverse the list
    let current = this.head;
    // keeps track of the node before current in the loop
    let previous = null;
    // used to track how deep into the list you are
    let i = 0;
    // same loops as in `get()`
    while ((current !== null) && (i < index)) {
        // save the value of current
        previous = current;
        // traverse to the next node
        current = current.next;
        // increment the count
        i++;
    }
    // if node was found, remove it
    if (current !== null) {
        // skip over the node to remove
        previous.next = current.next;
        // return the value that was just removed from the list
        return current.data;
    }
    // if node wasn't found, throw an error
    throw new RangeError(`Index ${index} does not exist in the list.`);
  }
  getTotal(){
    let total=0;
    let current = this.head;
      while (current !== null) {
        total= total+current.amount
        current = current.next;
        
      }
  
    return total;
  }


}

export default LinkedList;
