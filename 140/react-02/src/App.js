import React from 'react';
import Applogo from './components/Applogo.js';
import './App.css';
import Bear from './components/Bear.js';
import TTT from './components/TTT.js';
import Banklogo from './components/Banklogo.js';
import Home from './components/Home';
import Tabs from './components/Tabs';
import Game from './components/Game';
import Bank from './components/Bank/Bank';
import Cities from './components/Cities/cities';
import City from './components/citylogo';
import LinkedList from './components/LinkedList/LinkedList.js';

let TTTComp = <TTT />;
let BearComp = <Bear />;
function App() {
  
  return (
    <div> 
      <div>
        <h1>React</h1>
          <Tabs>
            <div label=<Applogo />>
              <Home />
              </div>

              <div label={TTTComp}>
                <Game />
              </div>

              <div label=<Banklogo />>
                <Bank />
              </div>
              <div label=<City />>
                <Cities />
            </div>
            <div label={BearComp}>
                <LinkedList />
            </div>
          </Tabs>
      </div>
      </div>  
    );
}


export default App;
