import React, { useState } from "react";

import "./XCalculator.css";

function  XCalculator()  {
    
    const buttonValues = [
        [7, 8, 9, "+"],
        [4, 5, 6, "-"],
        [1, 2, 3, "*"],
        ["C", 0, "=", "/"],
      ];
    
      const [inputData, setInputData] = useState("");
      const [output, setOutput] = useState("");
    
      const handleButtonClick = (value) => {
        if (value === "=") {
          const res = eval(inputData);
          if (inputData == 0 / 0) {
            setOutput("NaN");
          } else if (inputData == "") {
            setOutput("Error");
          } else if (res == Infinity) {
            setOutput("Infinity");
          } else {
            setOutput(res);
          }
    
          setInputData("");
        } else if (value === "C") {
            setInputData("");
            setOutput("");
        } else {
            setInputData((prevInputValue) => prevInputValue + value);
        }
      };
    
      return (
        <div className="cal">
          <h1>React Calculator</h1>
          <input
            type="text"
            value={inputData}
            readOnly
          />
          <div >{output}</div>
          {buttonValues.map((buttonRow, i) => {
            return (
              <div key={i} className="row">
                {buttonRow.map((buttonValue, j) => {
                  return (
                    <button
                      key={j}
                      onClick={() => handleButtonClick(buttonValue)}
                      className="btn"
                    >
                      {buttonValue}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      );
    }



    
export default XCalculator;