import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import CityCtrl from "./CityCtrl";
import CityCard from "./CityCard";

function click(txt) {
  fireEvent.click(screen.getByText(txt));
}

test("Button tests", () => {
  const addPop = jest.fn();
  const subPop = jest.fn();
  const delCity = jest.fn();
  //   render(<CityCtrl
  //     // addPopulation={addPop}
  //     // subtractPopulation={subPop}
  //     // delete={delCity}
  //   />);
  //   screen.getByText(/New City/i);
  //   click("New City");
  //   screen.getByText(/Add Random Data/i);
  //   click("Add Random Data");
  //   screen.getAllByText(/Add/i);
  //   click("Add");
  render(
    <CityCard
      addPopulation={addPop}
      subtractPopulation={subPop}
      delete={delCity}
    />
  );
  //   screen.debug();
  //   screen.getAllByText(/Add Population/i);
  click("Add Population");
  expect(addPop.mock.calls.length).toBe(1);
  click("Add Population");
  expect(addPop.mock.calls.length).toBe(2);

  //   screen.getAllByText(/Remove Population/i);
  click("Remove Population");
  expect(subPop.mock.calls.length).toBe(1);
  click("Remove Population");
  expect(subPop.mock.calls.length).toBe(2);

  //   screen.getByText(/Delete City/i);
  click("Delete City");
  expect(delCity.mock.calls.length).toBe(1);
});

// test("controller component", () => {
//     const newAccount = jest.fn();

//     render(<AcctCtrl />);
//     // screen.debug();
//     // console.log(screen.getByText(/New Account/i));
//     // click("Deposit");
//     // expect(depositPress.mock.calls.length).toBe(1);

//   });
