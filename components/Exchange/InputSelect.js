import Connector from "./Connector";
import styles from "./Exchange.module.scss";
import { useField, ErrorMessage } from "formik";
/////////////////////////
const InputSelect = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className={styles.input_field_div}>
        {/* <div className={styles.dropdown_design} /> */}
          <input {...field} placeholder={props.placeholder} />{" "}
      </div>
      <div className={styles.error}>
        <ErrorMessage name={field.name} />
      </div>
    </>
  );
};

export default InputSelect;
