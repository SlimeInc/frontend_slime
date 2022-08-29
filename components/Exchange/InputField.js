import styles from "../Main.module.scss";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useField } from "formik";
import { useCallback } from "react";
import { fa } from "faker/lib/locales";
const InputField = ({
  type,
  placeholder,
  name,
  id,
  Isdropdown = false,
  setDropdown,
  value,
  showField,
  disabled,
  button = false,
  required = true,
  field,
}) => {
  const HandleAsset = (e) => {
    showField({ ...field, asset: e.target.value });
  };
  const HandleChange = (e) => {
    e.preventDefault();
    let id = e.target.name;
    showField({ ...field, id: e.target.value });
  };
  return button ? (
    <button type="submit" className={!disabled ? styles.button_disabled : null}>
      send
    </button>
  ) : (
    <div className={!disabled ? styles.input_field_div : styles.input_disabled}>
      <div className={styles.dropdown_design}>
        {Isdropdown && (
          <MdOutlineArrowDropDown
            color="white"
            size="2em"
            onClick={() => setDropdown(true)}
          />
        )}
      </div>

      <div className={styles.input_field}>
        <span>{placeholder}</span>
        <input
          type={type}
          id={id}
          name={name}
          disabled={!disabled}
          value={value}
          onChange={
            Isdropdown
              ? HandleAsset
              : (e) => {
                HandleChange(e)
         }
                }
          
          required={required}
        />{" "}
      </div>
    </div>
  );
};

export default InputField;
