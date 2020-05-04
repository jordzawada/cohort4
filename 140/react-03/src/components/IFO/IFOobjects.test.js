import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IFO from "./IFOobjects.js";
import IFOApp from "./IFOApp.js";
import IFOCard from './IFOCard.js';

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
 
  // const myCountFunc = jest.fn();

  //Test that the app renders HTML
  let {queryByText} = render(<IFOApp></IFOApp >);
  // console.log(container);
  let test1 = queryByText('FIFO');
  console.log(test1);
  
  expect(test1.innerHTML).toBe('FIFO');
  
  // screen.debug();
  // expect().toBe();

  // test that buttons are made.
  const el = screen.getByText(/Random Name/i);
  expect(el.id).toBe("idRandName")
  
  // fireEvent.click(el);
  //   console.log(myCountFunc.mock.calls.length);

});