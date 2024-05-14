import "./CustomInput.scss";

const CustomInput = ({ label, type, name, placeholder }) => {
  return (
    <div className="custom-input">
      <label htmlFor={name}></label>
      <input id={name} type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default CustomInput;
