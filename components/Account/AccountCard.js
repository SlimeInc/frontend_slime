import styles from "./Account.module.scss";
import millify from "millify";
import { useState } from "react";

const AccountCard = ({ coin }) => {
  const [hover, sethover] = useState(false);
  console.log(coin.color);
  const coloring = {
    backgroundColor: coin.color.toString(),
    transition: `all 0.5s ease`,
    color: "#fff",
    backgroundBlendMode:`color-burn`,}
  return (
    <div
      className={styles.crypto_card}
      onMouseEnter={() => sethover(true)}
      onMouseLeave={()=>sethover(false)}
      style={hover ? coloring : {transform:'none'}}

    >
      <div className={styles.face}>
        <h3>{coin?.name}</h3>
        <img src={coin?.iconUrl} />
      </div>

      <div className={styles.back}>
        <span>{`Price : $ ${millify(coin?.price)}`}</span>
        <span>{`Market cap : $ ${millify(coin?.marketCap)}`}</span>
        <span>{`Daily Price Change : ${millify(coin?.change)}%`}</span>
      </div>
    </div>
  );
};

export default AccountCard;
