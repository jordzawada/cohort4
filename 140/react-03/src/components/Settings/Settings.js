import React, { useEffect } from "react";
import { ThemeContextConsumer } from "../../ThemeContext.js";
import { SketchPicker } from "react-color";

function Settings(props) {

  const context = ThemeContextConsumer;
  const [color, setColor] = React.useState();

  const handleChangeComplete = (color) => {
    color = setColor(color);
  };

  return (
    // <ThemeContextConsumer>
      
        <div>
          <h1>Theme Settings </h1>
          <p>{context.theme}</p>
          <button onClick={context.toggleFontColour}>Click</button>
          <hr />
          <li>Text Color</li>
          <div id="idColorPicker">
            <SketchPicker
              color={color}
              onChangeComplete={handleChangeComplete}
            />
          </div>
          <li>Font</li>
        </div>
      
    //  </ThemeContextConsumer> 
  );
}
export default Settings;

//  {(context) => ( 
// )}