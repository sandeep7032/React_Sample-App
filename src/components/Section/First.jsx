import { useState } from "react";
import Context from "./Context";
import Second from "./Second";

const First = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>First Component</h1>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setValue(input);
        }}
      >
        Send to Third Component
      </button>
      <hr />
      <Context.Provider value={value}>
        <Second />
      </Context.Provider>
    </div>
  );
};

export default First;
