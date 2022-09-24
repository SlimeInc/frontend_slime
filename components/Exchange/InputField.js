import styles from "./Exchange.module.scss";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useField, ErrorMessage } from "formik";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

const wallet = {
  BTC: { amt: "27" },
  USDT: { amt: "27567" },
  SOL: { amt: "34" },
};

const InputField = (props) => {
  const [dropdown, setdropdown] = useState(false);
  const [field, meta] = useField(props);
  return (
    <>
      <div className={styles.input_field_div}>
        <div className={styles.dropdown_design}>
          <MdOutlineArrowDropDown color="white" size="2em" />
        </div>

        <div className={styles.input_field}>
          <div>{props.placeholder}</div>
          <select {...field} className={styles.input_field}>
            {Object.keys(wallet).map((asset) => (
              <option
                value={asset}
                key={asset.toString()}
                className={styles.dropdown_content_item}
                
              >
                {asset}
              </option>
            ))}
          </select>{" "}
        </div>
      </div>
      <div className={styles.error}>
        <ErrorMessage name={field.name} />
      </div>
    </>
  );
};

export default InputField;
