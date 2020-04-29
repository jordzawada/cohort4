import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LinkedList from "./LinkedListObjects.js";
import LinkedListApp from "./LinkedList.js";

test("linked list tests",()=>{
  const linkedList = new LinkedList();
  // console.log(linkedList);
  expect(typeof(linkedList)).toBe("object");
  //test add
  linkedList.add(1);
  expect(linkedList.head.data).toBe(1);
  linkedList.add(2);
  // console.log(linkedList.head.next.data);
  expect(linkedList.head.next.data).toBe(2);
  //test the get
  linkedList.add("a");
  linkedList.add("b");
  linkedList.add("c");
  let get4 = linkedList.get(4);
  
  expect(get4).toBe("c");
  expect(linkedList.get(3)).toBe("b");
  expect(linkedList.get(2)).toBe("a");
  //test the remove
  linkedList.remove(2);
  expect(linkedList.get(2)).toBe("b");
  linkedList.remove(2);
  expect(linkedList.get(2)).toBe("c");
});

test("React tests",()=>{
  render(<LinkedListApp></LinkedListApp >)
  screen.debug()
  // expect().toBe();

});