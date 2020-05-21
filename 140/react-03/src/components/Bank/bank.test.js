import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import AcctCtrl from "./AcctCtrl";
import AccountCard from "./AccountCard";

function click(txt) {
  fireEvent.click(screen.getByText(txt));
}

test("bank tests", () => {
  const depositPress = jest.fn();
  const withdrawPress = jest.fn();
  render(<AccountCard 
    handleDepositClick={depositPress} 
    handleWithdrawClick={withdrawPress}
  />);
  // screen.debug();
  screen.getByText(/Deposit/i);
  click("Deposit");
  expect(depositPress.mock.calls.length).toBe(1);
  click("Deposit");
  expect(depositPress.mock.calls.length).toBe(2);

  screen.getByText(/Withdraw/i);
  click("Withdraw");
  expect(withdrawPress.mock.calls.length).toBe(1);
  click("Withdraw");
  expect(withdrawPress.mock.calls.length).toBe(2);
});


test("controller component", () => {
    // const depositPress = jest.fn();
    // const withdrawPress = jest.fn();
    render(<AcctCtrl
    />);
    // screen.debug();
    // screen.getByText(/Deposit/i);
    // click("Deposit");
    // expect(depositPress.mock.calls.length).toBe(1);
   
  
   
  });
  
