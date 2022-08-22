
import styles from "./Account.module.scss";

const AccountHead = () => {
  return (
    <div className={styles.assets_head}>
      <div>Token</div>
      <div>Wallet</div>
      <div>Trend</div>
      <div>Price</div>
      <div>Market Cap</div>
    </div>
  );
};


export default AccountHead;
