/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Label = ({ htmlFor, text }) => {
  return (
    <label style={{paddingBottom: "5px",display:"block",color:"brown"}} htmlFor={htmlFor}>{text}</label>
  );
}

export default Label;
