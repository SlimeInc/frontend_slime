import React from "react";
import styles from "./Exchange.module.scss";

const DropDownItem = ({ children}) => {

  return (
    <div className={styles.dropdown_content_item}>
      {children}
    </div>
  );
};

export default DropDownItem;
{
  /* <label>
<Field type="radio" name="picked" value="One" />
One
</label> */
}
