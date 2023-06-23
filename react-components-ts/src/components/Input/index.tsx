import "./Input.css";
import { useState } from "react";

const Input = ({
  placeholder,
  id,
}: {
  placeholder: string;
  id: string;
}) => {
  const [text, setText] = useState("");
  const small = text.length !== 0 ? "small" : "";
  return (
    <div className={"input" + small}>
      <input
        type={placeholder}
        id={id}
        className={"control" + small}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor={id} className="label">
        {placeholder.toLowerCase() === "tel" ? "Phone" : placeholder}
      </label>
    </div>
  );
};

export default Input;
