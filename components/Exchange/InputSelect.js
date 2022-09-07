import styles from "./Exchange.module.scss";


/////////////////////////
const InputSelect = (props) => {
  const HandleChange = (e) => {
    const name =e.target.name
    props.showField({ ...props.field, [name]: e.target.value });
  };


  return (
    <div className={ styles.input_field_div }>
      <div className={styles.dropdown_design}/>
      <div className={styles.input_field}>
        <div>{props.placeholder}</div>
        <input {...props}  disabled={props.disabled} placeholder='' onChange={HandleChange}  />{" "}
      </div>
    </div>
  );
};

export default InputSelect;
