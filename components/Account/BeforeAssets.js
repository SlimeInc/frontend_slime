import Image from "next/image";
import React from "react";
import WalletPic from '../../public/images/WalletPic.png'
import styles from './Account.module.scss'

const BeforeAssets = () => {
  return (
    <div className={styles.before_assets}>
     <Image src={WalletPic} height={500} width={500}/>
    </div>
  );
};

export default BeforeAssets;
