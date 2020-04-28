import React from 'react';
import logo from './logo.svg';
import './App.css';
import Larrycomp from './LarryApp';

let index=20;

function App() {
  const [count, setCount] = React.useState(10)

  function myOnClick(e){
    // count++;
    console.log("clicked count "+count);
    setCount(count+1);
  } 
  function myOnClickIndex(e){
    index++;
    console.log("we just clicked index ",index);
    
  }


 return (
    <div className="App">
      <div>
      <h1 onClick={myOnClick}> Hello World count {count}</h1>
      <h1 onClick={myOnClickIndex}> Hello World index {index}</h1>
      <Larrycomp countxx={count} countFunc={myOnClick}/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;
