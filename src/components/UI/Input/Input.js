import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false && classes.invalid
      } `}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type}
        id={props.id}
      />
    </div>
  );
};

export default Input;
