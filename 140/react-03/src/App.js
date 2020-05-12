import React from "react";
import Applogo from "./components/Applogo.js";
import "./App.css";
import Bear from "./components/Bear.js";
import TTT from "./components/TTT.js";
import Banklogo from "./components/Banklogo.js";
import Home from "./components/Home";
import Tabs from "./components/Tabs";
import Game from "./components/Game";
import Bank from "./components/Bank/Bank";
import Cities from "./components/Cities/cities";
import City from "./components/citylogo";
import LinkedList from "./components/LinkedList/LinkedList.js";
import IFOApp from "./components/IFO/IFOApp.js";
import IFO from "./components/IFO.js";
import Settings from "./components/Settings/Settings.js";
import SettingsLabel from "./components/SettingsLabel.js";

import {ThemeContext} from "./ThemeContext.js";

let TTTComp = <TTT />;
let BearComp = <Bear />;
// {{marginRight: spacing + 'em'}}  style={x}

class App extends React.Component {
  
  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    const  {color1} = this.context
    return (
      // <ThemeContext.Consumer>
      //   {(value) =>(
      <div
      style={{color: color1}}
      >
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

            <div label=<IFO />>
              <IFOApp />
            </div>

            <div label=<SettingsLabel />>
              <Settings />
            </div>
          </Tabs>
        </div>
      </div>
      //   )}
      //  </ThemeContext.Consumer>
    );
  }
}

export default App;
