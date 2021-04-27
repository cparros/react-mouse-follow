//import default react and also named exports (useState, useCallback)
import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';

const width = 960;
const height = 500;
const circleRadius = 30
// 1. Initial position to middle of display
const initialMousePosition = {x: width / 2, y: height / 2}

const App = () => {
  // 2. initial mouse position passed to use State. This initiallizes state value and it is used as mouse position.
  const [mousePosition, setMousePosition] = useState(initialMousePosition)
  //This function handlse the mouse movement coordinates
//if you pass in event and console.log(event you will see client x and client y. these will display coorinates of mouse move)
//console.log client x and client y to see XY-coordinates of mouse move

// 5. THIS IS RUN AFTER MOUSE MOVE AND SETS MOUSE POSITION TO CLIENT X AND Y CHANGING THE STATE WHICH RERUNS THE WHOLE APP FUNCTION.
//6. second run of app the initial position is the value of the set mouse position from the set moust position action run previously.
const handleMouseMove = useCallback(event => {
  //ES6 destructuring here
  const {clientX, clientY} = event
  setMousePosition({x: clientX, y: clientY})
  // Above same as => console.log({clientX: clientX, clientY: clientY})
  //setMouse position is used here because it is the only thing that is not changed between renders becasue of use state
}, [setMousePosition])
  return (
    // 4. AFTER MOUSE IS MOVED HANDLE MOUSE MOVE IS RUN 
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
    
        <circle
        // 3. Mouse position on line 15 is used to set cx and cy
          cx={mousePosition.x}
          cy={mousePosition.y}
          r={circleRadius}
        />
      
    </svg>
)};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);