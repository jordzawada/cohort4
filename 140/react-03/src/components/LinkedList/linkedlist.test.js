import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LinkedList from "./LinkedListObjects.js";
import LinkedListApp from "./LinkedList.js";

test("linked list tests",()=>{
  const linkedList = new LinkedList();
  // console.log(linkedList);
  expect(typeof(linkedList)).toBe("object");
  //test insert
  linkedList.insert(1,100);
  expect(linkedList.head.data).toBe(1);
  expect(linkedList.head.show()[0]).toBe(1);
  expect(linkedList.head.show()[1]).toBe(100);
  linkedList.insert(2,200);
  // console.log(linkedList.head.next.data);
  expect(linkedList.head.next.data).toBe(2);
  expect(linkedList.head.next.show()[0]).toBe(2);
  expect(linkedList.head.next.show()[1]).toBe(200);
  //test the get
  linkedList.insert("a",300);
  linkedList.insert("b",350);
  linkedList.insert("c",400);
  expect(linkedList.getLast()).toBe(4)
  let get4 = linkedList.get(4);
  
  expect(get4[0]).toBe("c");
  expect(get4[1]).toBe(400);
  expect(linkedList.get(3)[0]).toBe("b");
  expect(linkedList.get(2)[0]).toBe("a");
  //test the remove
  linkedList.delete(2);
  expect(linkedList.getLast()).toBe(3)
  expect(linkedList.get(2)[0]).toBe("b");
  linkedList.delete(2);
  expect(linkedList.getLast()).toBe(2)
  expect(linkedList.get(2)[0]).toBe("c");
  expect(linkedList.position).toBe(2)
});

test("React tests",()=>{
  render(<LinkedListApp></LinkedListApp >)
  // screen.debug()
  // expect().toBe();

});