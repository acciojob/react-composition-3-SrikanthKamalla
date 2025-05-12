import React from "react";
// import { Tooltip } from "react-tooltip";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Tooltip text={<h2>This is a tooltip</h2>}>
        {<h2>Hover over me</h2>}
      </Tooltip>

      <br></br>
      <Tooltip text={<p>This is a tooltip</p>}>{<p>Hover over me</p>}</Tooltip>
    </div>
  );
};

export default App;
