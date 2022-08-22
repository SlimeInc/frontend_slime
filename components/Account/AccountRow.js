import styles from "./Account.module.scss";
import AccountItem from "./AccountItem";
import ItemIcon from "./ItemIcon";
import ItemChange from "./ItemChange";
import ItemDollar from "./ItemDollar";

const AccountRow = ({ coin,wallet }) => {
  return (
    <div className={styles.assets_head}>
      <ItemIcon coin_icon_url={coin.iconUrl} coin_name={coin.name} />
      <AccountItem wallet={wallet} />
      <ItemChange value={coin.change}/>
      <ItemDollar wallet={coin.price} />
      <ItemDollar wallet={coin.marketCap} />
    </div>
  );
};

export default AccountRow;
