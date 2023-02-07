import { useState } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";

const Form = (props) => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (value) => setInputValue(value);

  const onClick = () => {
    if (props.onSubmit) {
      props.onSubmit(inputValue);
    }
  };

  return (
    <>
      <Input label="Search:" onChange={handleChange} />
      <Button onClick={onClick} />
      <Input label="Another search:" onChange={handleChange} />
      <Button onClick={onClick} />
    </>
  );
};
export default Form;
