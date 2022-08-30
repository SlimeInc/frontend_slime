import styles from "./Exchange.module.scss";
import { MdOutlineArrowDropDown } from "react-icons/md";
// import { useCallback } from "react";
const InputField = (props) => {
  const HandleChange = (e) => {
    // e.preventDefault();
    const value = e.target.value;
    props.showField((field) => ({ ...field, asset: value }));
    console.log(props.field.asset);
  };
  return (
    <div className={styles.input_field_div}>
      <div className={styles.dropdown_design}>
        <MdOutlineArrowDropDown
          color="white"
          size="2em"
          onClick={() => props.setdropdown(!props.dropdown)}
        />
      </div>

      <div className={styles.input_field}>
        <div>{props.placeholder}</div>
        <input
          {...props}
          placeholder=""
          required
          onChange={HandleChange}
        />{" "}
      </div>
    </div>
  );
};

export default InputField;
