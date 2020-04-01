import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import EvenComp from './components/EvenComponent';
import OddComp from './components/OddComponent';

class App extends React.Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
    

  }
  onPushMe = () => {
    console.log("You pushed me");
    this.counter++;
    console.log(this.counter);
    this.setState({
      myState: "now:" + this.counter
    });
  }
  evenOrOdd =(num)=>{
    if (num%2===0){
      return <EvenComp />
    } else {
      return <OddComp />
    }
  }

  render(){
    const whatToSay = "What Ever";
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>I am in control of this application and my name is {this.state.myState}</h1>
            <button onClick={this.onPushMe}>
            Push Me
          </button>

          <MyComponent whatToSay={whatToSay} onPushMe={this.onPushMe}/>
          {this.evenOrOdd(this.counter)}
          
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
  }
}

export default App;
