import {LinkedListNode} from "./LinkedListObject.js";

test("test the class", () => {
    let linkedList = new LinkedListNode();
    console.log(linkedList.next);
    
    expect(linkedList.next).toBe(null);
   
  });