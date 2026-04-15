import { useState } from "react";

function InputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("Input value:", inputValue);
  };

  return (
    <div className="input-form">
      <h3>Exercise 3 & 4: State & Events</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="form-input"
      />
      <button onClick={handleButtonClick} className="log-btn">
        Log Input Value
      </button>
    </div>
  );
}

export default InputForm;
