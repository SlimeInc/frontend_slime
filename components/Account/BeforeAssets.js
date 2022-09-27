import React from "react";
import WalletPic from "../../Public/images/WalletPic.png";
import styles from "./Account.module.scss";

const BeforeAssets = () => {
  return (
    <div className={styles.before_assets}>
      <img src="images/WalletPic.png" height={500} width={500} />
    </div>
  );
};

export default BeforeAssets;
