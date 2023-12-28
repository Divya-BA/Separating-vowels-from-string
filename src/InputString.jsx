import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputString() {
  const [InputString, setInputString] = useState("");
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path, { state: { InputString } });
  };

  return (
    <div className="main">
      <h2>
        Here we can separate vowels and other characters from the given String
      </h2>
      <div>
        <input
          type="text"
          value={InputString}
          onChange={(e) => setInputString(e.target.value)}
          placeholder="Enter a string"
        />
        <br />
        <button onClick={(e) => handleButtonClick("/rString")}>
          Remaining String
        </button>
        <button onClick={(e) => handleButtonClick("/sString")}>Vowels</button>
      </div>
    </div>
  );
}

export default InputString;
