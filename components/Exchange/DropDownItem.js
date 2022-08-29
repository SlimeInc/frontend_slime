import { Field } from "formik";
import React from "react";
import styles from "../Main.module.scss";
const DropDownItem = ({ children, setDropdown, setAsset ,showField,field}) => {
  const Handleclick = () => {
    // console.log(`sjhfksj;fjlsd`, children.toString().slice(0,-2));
    // setAsset(children.toString().slice(0,-2));
    showField({...field,amount:0.1,asset:children.toString().slice(0,-2)});
    setDropdown(false);
  };

  return (
    <div className={styles.dropdown_item} onClick={Handleclick} >
      {children}
    </div>
  );
};

export default DropDownItem;
