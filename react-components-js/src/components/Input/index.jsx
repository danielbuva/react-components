import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ placeholder, id, value, onChange, error }) => {
  const small = value.length !== 0 ? "small" : "";
  const autoComplete = id === "password" ? "new-passwrd" : id;
  const invalid = error && error.length > 1 ? "invalid" : "";

  return (
    <div className={"input" + small + invalid}>
      <input
        type={placeholder}
        id={id}
        name={id}
        className={"control" + small + invalid}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      <label htmlFor={id} className="label">
        {placeholder.toLowerCase() === "tel" ? "Phone" : placeholder}
      </label>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Input;
