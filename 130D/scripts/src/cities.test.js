import functions from "./cities.js";
import { City, Community } from "./cities.js";
global.fetch = require("node-fetch");

test("test the basics", async () => {
  // test async and server ability to hand out data

  // initiate a new City class
  let newCity = new City("test1", 45.6, 75.4, 90000);
  expect(newCity.Name).toBe("test1");
  // test the movedIn
  newCity.movedIn(500);
  expect(newCity.Population).toBe(90500);
  //test moved out
  newCity.movedOut(1000);
  expect(newCity.Population).toBe(89500);
  // test howBig()
  let City1 = new City("City1", 45.6, 75.4, 200000);
  expect(City1.howBig()).toBe("City");
  let LargeTown1 = new City("LargeTown1", 45.6, 75.4, 30000);
  expect(LargeTown1.howBig()).toBe("Large Town");
  let Town1 = new City("Town1", 45.6, 75.4, 20000);
  expect(Town1.howBig()).toBe("Town");
  let Village1 = new City("Village1", 45.6, 75.4, 525);
  expect(Village1.howBig()).toBe("Village");
  let Hamlet1 = new City("Hamlet1", 45.6, 75.4, 56);
  expect(Hamlet1.howBig()).toBe("Hamlet");
  expect(Hamlet1.whichSphere()).toBe("City is in Northern Hemisphere");
});

test("test the community controller", async () => {
  let data = [
     { "key": 1, "Name": "Calgary", "Latitude": 51.05, "Longitude": -114.05 , "Population": 1400000},
     { "key": 2, "Name": "Edmonton", "Latitude": 53.55, "Longitude": -113.49, "Population": 1200000 },
     { "key": 3, "Name": "Red Deer", "Latitude": 52.28, "Longitude": -113.81, "Population": 140000 }
  ]
  const Community1 = new Community(data);
  expect(Community1.data[0].Name).toBe("Calgary");
  expect(Community1.data[1].Name).toBe("Edmonton");
//   console.log(Community1);
  // test most northern
  expect(Community1.getMostNorthern()).toBe("Edmonton");
  // most southern is the same as most northern but with a negative
  expect(Community1.getMostSouthern()).toBe("Calgary");
  // test the total population. Make some cities and tally it all up
  let City1 = new City("City1", 45.6, 75.4, 200000);
  let LargeTown1 = new City("LargeTown1", 45.6, 75.4, 30000);
  let Town1 = new City("Town1", 45.6, 75.4, 20000);
  let data2 = [];
  data2[0] = City1;
  data2[1] = LargeTown1;
  data2[2] = Town1;
  const Community2 = new Community(data2);
  expect(Community2.getPopulation()).toBe(250000);
  // add a city into the object
  Community2.createCity("Town2");
  expect(Community2.data.length).toBe(4);

  // delete a city
  Community2.deleteCity(3);
  expect(Community2.data.length).toBe(3);
});

test("test the post", async () => {
  // let clear = functions.postData("http://127.0.0.1:5000/clear");
  // need the server running from 920
  let url = "http://127.0.0.1:5000/add";
  const data = { key: 4, name:"Jordan" };
  const Community1 = new Community(data);
  // Community1.objectification();
  // console.log(Community1.data);
  let resp = await functions.postData(url, Community1.data);
  
  // console.log(await resp);
  expect(resp.status).toEqual(200);
  const data2 = await functions.postData("http://127.0.0.1:5000/delete", {key:4});
  expect(data2.status).toEqual(200);
});

test("test the dom functions", async () => {
  //make a new div
  document.body.innerHTML = `<div id="cloneTest">` + `</div>`;
  functions.createCard("cloneTest");
  functions.createCard("cloneTest");
  let z = document.getElementById("cloneTest").children.length;
  expect(z).toBe(2);
});

test("test the delete from server function", async () => {
  let data = await functions.getCities("http://127.0.0.1:5000/all");
  expect(data.length).toBe(3);
  await functions.deleteCity(2);
  // console.log(data);
  expect(data.length).toBe(2);
});

