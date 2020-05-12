import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {ThemeContextProvider} from './ThemeContext.js';
import ThemeContext, { time }  from './ThemeContext.js';
// value={this.state.activeTheme}


ReactDOM.render(
  
  <React.StrictMode>
    <ThemeContext.Provider value ={time.color1}>
    <App />
    </ThemeContext.Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
