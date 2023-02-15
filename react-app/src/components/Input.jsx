import "./Input.css";
import { useState } from "react";

const Input = (props) => {
  const [state, setState] = useState("");

  const change = (event) => {
    let value = event.target.value;
    setState(value);

    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <div className="container">
      <div>
        <label htmlFor="input" className="input-label">
          {props.label}
        </label>
        <input
          type="text"
          id="input"
          className="input"
          name="input"
          value={state}
          onChange={change}
        ></input>
      </div>
    </div>
  );
};
export default Input;
