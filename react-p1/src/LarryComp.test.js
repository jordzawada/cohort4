import React from 'react';
import { render, screen, act, fireEvent } from "@testing-library/react";
import LarryApp from "./LarryApp";

test ("test LarryApp", ()=>{
// console.log("working?");

const myCountFunc = jest.fn();
render(<LarryApp></LarryApp>);
// screen.debug();

const el = screen.getByText(/hello world/i)

fireEvent.click(el);
console.log(myCountFunc.mock.calls.length);
 
});


// function click (txt) {
//     fireEvent.click(
//         screen.getByText(txt)
//     )
// }