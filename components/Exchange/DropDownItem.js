import React from "react";
import styles from "./Exchange.module.scss";

const DropDownItem = ({
  children,
  setdropdown,
  showField,
  field,
}) => {
  const Handleclick = () => {
    const value = children.toString().slice(0, -2);
    showField((field) => ({ ...field, asset: value }));
    setdropdown(false);
  };

  return (
    <div className={styles.dropdown_content_item} onClick={Handleclick}>
      {children}
    </div>
  );
};

export default DropDownItem;
