import React, { useState } from "react";
import { Button, TextField, ButtonGroup } from "@material-ui/core";
import stringMath from "string-math";
import KeyboardEventHandler from "react-keyboard-event-handler";

function App() {
  const [Operation, setOperation] = useState("");
  const operations = ["+", "-", "*", "/", "(", ")"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  return (
    <div className="app">
      <TextField
        id="filled-read-only-input"
        label="Operation"
        style={{ backgroundColor: "rgba(240, 248, 255, 0.9)" }}
        InputProps={{
          readOnly: true,
          value: Operation,
        }}
        fullWidth
        variant="filled"
      />
      <div className="btn-group">
        <ButtonGroup
          className="btn"
          size="large"
          color="default"
          aria-label="large button group"
          style={{ marginLeft: "30%" }}
        >
          <Button
            onClick={() => {
              setOperation("");
            }}
            color="secondary"
          >
            AC
          </Button>

          <Button
            color="primary"
            onClick={() => {
              setOperation(Operation.substring(0, Operation.length - 1));
            }}
          >
            C
          </Button>
          <Button
            onClick={() => {
              setOperation(stringMath(Operation));
            }}
          >
            =
          </Button>
        </ButtonGroup>
      </div>
      <div className="operations flex-row">
        {operations.map((value, id) => (
          <div className="btn" key={id}>
            <Button
              style={{
                minWidth: "100px",
                minHeight: "50px",
              }}
              variant="contained"
              color="secondary"
              onClick={() => setOperation(`${Operation}${value}`)}
            >
              {value}
            </Button>
          </div>
        ))}
      </div>
      <div className="numbers flex-row ">
        {numbers.map((value, id) => (
          <div className="btn" key={id}>
            <Button
              style={{
                minWidth: "100px",
                minHeight: "50px",
              }}
              variant="contained"
              color="primary"
              onClick={() => setOperation(`${Operation}${value}`)}
            >
              {value}
            </Button>
          </div>
        ))}
      </div>
      <KeyboardEventHandler
        handleKeys={["all"]}
        onKeyEvent={(key, e) => {
          if (key === "backspace")
            setOperation(Operation.substring(0, Operation.length - 1));
          else if (numbers.includes(key) || operations.includes(key))
            setOperation(`${Operation}${key}`);
          else if (e.key === "Enter") setOperation(stringMath(Operation));
        }}
      />
      <div className="style"></div>
    </div>
  );
}

export default App;
