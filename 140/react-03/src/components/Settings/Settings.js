import React from "react";
// import { ThemeContextConsumer } from "../../ThemeContext.js";
import { SketchPicker } from "react-color";
import ThemeContext,{ time }  from '../../ThemeContext.js';


function Settings(props) {

  // const context = ThemeContext;
  let [color, setColor] = React.useState();
  // let [times, setTimes] =React.useState(time.time1)

  // const timeChange =()=>{
  //    setTimes(time.toggleTime())
  // }

  const handleChangeComplete = (color) => {
    time.changeColor(color.hex)
    color = setColor(color);
    
  };

  return (
    // <ThemeContextConsumer>
      
        <div>
          <h1>Theme Settings </h1>
          {/* <p>{time.time1}</p> */}
          {/* <button onClick={timeChange}>Click</button> */}
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

Settings.contextType = ThemeContext;

export default Settings;

//  {(context) => ( 
// )}