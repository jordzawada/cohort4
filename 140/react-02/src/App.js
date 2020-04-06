import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bear from './components/Bear.js';
import TTT from './components/TTT.js';
import Home from './components/Home';
import Tabs from './components/Tabs';
import Game from './components/Game';

let TTTComp = <TTT />;
let BearComp = <Bear />;
function App() {
  
  return (
    <div> 
      <div>
        <h1>React</h1>
          <Tabs>
          <div label={BearComp}>
            <Home />
            </div>
            <div label={TTTComp}>
              <Game />
            </div>
            <div label=<Bear />>
              After 'while, <em>Crocodile</em>!
            </div>
            <div label=<Bear />>
              Nothing to see here, this tab is <em>extinct</em>!
            </div>
          </Tabs>
      </div>
      </div>  
    );
}


export default App;
