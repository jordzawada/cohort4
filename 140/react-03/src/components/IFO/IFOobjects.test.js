import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IFO from "./IFOobjects.js";
import IFOApp from "./IFOApp.js";

test("POJO tests",()=>{
  const list1 = new IFO();
  // console.log(linkedList);
  //test the add to queues
  expect(typeof(list1)).toBe("object");
  list1.addToLIFO("test1");
    expect(list1.lifo[0].name).toBe("test1");
    list1.addToLIFO("test2");
    expect(list1.lifo[1].name).toBe("test2");
    expect(list1.lifo.length).toBe(2)

    list1.addToFIFO("test A");
    expect(list1.fifo[0].name).toBe("test A");
    list1.addToFIFO("test B");
    expect(list1.fifo[1].name).toBe("test B");
    expect(list1.fifo.length).toBe(2)

    //test the removes
    list1.removeLIFO();
    expect(list1.lifo.length).toBe(1);
    list1.removeLIFO();
    expect(list1.lifo.length).toBe(0);

    list1.removeFIFO();
    expect(list1.fifo.length).toBe(1);
    expect(list1.fifo[0].name).toBe("test B");

});

test("React tests",()=>{
  render(<IFOApp></IFOApp >)
  // screen.debug()
  // expect().toBe();

});