import React from "react";
import styles from "./Account.module.scss";

const DropDownItem = ({
  children,
  setdropdown,
  whichCoin,
  setWhichCoin
}) => {
  const Handleclick = () => {
    setdropdown(false);
    setWhichCoin(whichCoin)
    console.log(whichCoin)
  };

  return (
    <div className={styles.dropdown_content_item} onClick={Handleclick}>
      {children}
    </div>
  );
};

export default DropDownItem;
