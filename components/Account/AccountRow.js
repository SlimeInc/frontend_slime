import styles from "./Account.module.scss";
import { motion } from "framer-motion";
import AccountItem from "./AccountItem";
import ItemIcon from "./ItemIcon";
import ItemChange from "./ItemChange";
import ItemDollar from "./ItemDollar";

const AccountRow = ({ coin,wallet }) => {
  return (
    <motion.div className={styles.assets_row}>
      <ItemIcon coin_icon_url={coin.iconUrl} coin_name={coin.name} coin_link={coin.coinrankingUrl}/>
      <ItemChange value={coin.change}/>
      <ItemDollar wallet={coin.price} />
      <ItemDollar wallet={coin.marketCap} />
    </motion.div>
  );
};

export default AccountRow;
