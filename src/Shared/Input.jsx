/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Input = ({ id, name, type, placeholder, value, onChange }) => {
  return (
    <input
      style={{
        width: "80%",
        height: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        fontSize: "14px",
        color: "#333",
        padding: "8px"
      }} 
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
