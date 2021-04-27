(function (React, ReactDOM) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  //import default react and also named exports (useState, useCallback)

  var width = 960;
  var height = 500;
  var circleRadius = 30;
  // 1. Initial position to middle of display
  var initialMousePosition = {x: width / 2, y: height / 2};

  var App = function () {
    // 2. initial mouse position passed to use State. This initiallizes state value and it is used as mouse position.
    var ref = React.useState(initialMousePosition);
    var mousePosition = ref[0];
    var setMousePosition = ref[1];
    //This function handlse the mouse movement coordinates
  //if you pass in event and console.log(event you will see client x and client y. these will display coorinates of mouse move)
  //console.log client x and client y to see XY-coordinates of mouse move

  // 5. THIS IS RUN AFTER MOUSE MOVE AND SETS MOUSE POSITION TO CLIENT X AND Y CHANGING THE STATE WHICH RERUNS THE WHOLE APP FUNCTION.
  //6. second run of app the initial position is the value of the set mouse position from the set moust position action run previously.
  var handleMouseMove = React.useCallback(function (event) {
    //ES6 destructuring here
    var clientX = event.clientX;
    var clientY = event.clientY;
    setMousePosition({x: clientX, y: clientY});
    // Above same as => console.log({clientX: clientX, clientY: clientY})
    //setMouse position is used here because it is the only thing that is not changed between renders becasue of use state
  }, [setMousePosition]);
    return (
      // 4. AFTER MOUSE IS MOVED HANDLE MOUSE MOVE IS RUN 
      React__default['default'].createElement( 'svg', { width: width, height: height, onMouseMove: handleMouseMove },
      
          React__default['default'].createElement( 'circle', {
          // 3. Mouse position on line 15 is used to set cx and cy
            cx: mousePosition.x, cy: mousePosition.y, r: circleRadius })
        
      )
  )};

  var rootElement = document.getElementById('root');
  ReactDOM__default['default'].render(React__default['default'].createElement( App, null ), rootElement);

}(React, ReactDOM));
//# sourceMappingURL=bundle.js.map
