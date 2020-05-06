import React, { useEffect } from "react";
import {ThemeContextConsumer} from "../../ThemeContext.js";


function Settings(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <div>
          <h1>Theme Settings </h1>
            <p>{context.theme}</p>
            <button onClick={context.toggleTheme}>Click</button>
          <hr />
          <li>Text Color</li>
          <li>Font</li>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
export default Settings;
