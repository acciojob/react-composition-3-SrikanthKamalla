import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <div className="app-container">
        <Tooltip text="This is a tooltip">
          <h2 className="tooltip-heading">Hover over me</h2>
        </Tooltip>
        <br></br>
        <Tooltip text="This is anothe tooltip">
          <p className="tooltip-paragraph">
            Hover over me to see another tooltip
          </p>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
