import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState();
  const [output, setOutput] = useState();
  const [inputName, setInputName] = useState();

  const onChangeHandler = (event) => {
    var userInput = event.target.value;

    if (isNaN(userInput)) {
      setInput("Enter a valid input");
    } else if (
      (userInput % 4 === 0 && userInput % 100 !== 0) ||
      userInput % 400 === 0
    ) {
      setInput(inputName + ", you were born in a leap year");
    } else {
      setInput(inputName + ", you were not born in a leap year");
    }
  };

  const onClickHandler = () => {
    setOutput(input);
  };

  const onChangeHandler2 = (event) => {
    setInputName(event.target.value);
  };
  return (
    <div className="App">
      <input
        placeholder="Enter your name"
        className="input"
        onChange={onChangeHandler2}
      />
      <input
        placeholder="Enter your birth year"
        className="input"
        onChange={onChangeHandler}
      />
      <div>
        <button onClick={onClickHandler} className="btn">
          Click me
        </button>
      </div>
      <div className="output-text">{output}</div>
    </div>
  );
}
