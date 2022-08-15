import Image from "next/image";
import styles from "../components/Main.module.scss";
import polygon from "../public/images/Polygon.png";

const InputField = ({ type, placeholder, name, id , dropdown}) => {
  return (
    <div className={styles.input_field_div}>
      <div className={styles.dropdown_design}>
        {dropdown && (
          <div>
            <Image src={polygon} />
          </div>
        )}
      </div>
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
        className={styles.input_field}
      />{" "}
    </div>
  );
};

export default InputField;
