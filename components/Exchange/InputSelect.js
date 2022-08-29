import styles from "../Main.module.scss";
import { useField } from "formik";
const InputSelect = ({ ...props }) => {
  const HandleChange = (e, { name }) => {
    showField({ ...field, name: e.target.value });
  };
  const [field, meta] = useField(props);

  return button ? (
    <button type="submit" className={!disabled ? styles.button_disabled : null}>
      send
    </button>
  ) : (
    <div className={!disabled ? styles.input_field_div : styles.input_disabled}>
      <div className={styles.input_field}>
        <span>{placeholder}</span>
        <input {...field} {...props} />{" "}
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default InputSelect;
