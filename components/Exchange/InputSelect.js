import styles from "./Exchange.module.scss";


/////////////////////////
const InputSelect = (props) => {
  const HandleChange = (e) => {
    const name =e.target.name
    props.showField({ ...props.field, [name]: e.target.value });
  };


  return (
    <div className={!props.disabled ? styles.input_field_div : styles.input_disabled}>
      <div className={styles.dropdown_design}/>
      <div className={styles.input_field}>
        <div>{props.placeholder}</div>
        <input {...props}  disabled={props.disabled}onChange={HandleChange}  />{" "}
      </div>
    </div>
  );
};

export default InputSelect;
