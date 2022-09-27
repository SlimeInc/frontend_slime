import styles from "./Account.module.scss";
import StatsCard from "./StatsCard";
import { HiOutlineArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi";

import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";


const wallet = {
  BTC: { amt: "27" },
  USDT: { amt: "27567" },
  ETH: { amt: "34" },
};
const ChartStats = ({ cryptoList }) => {
  const { walletBalance } = useContext(TransactionContext)
  console.log("wallet in chart ", walletBalance)
  // let num, denum;
  // num = cryptoList.reduce(function (accumulator, asset) {
  //   return (
  //     accumulator +
  //     Number(asset?.price * wallet[asset?.symbol].amt * asset?.change)
  //   );
  // }, 0);
  // denum = cryptoList.reduce(function (accumulator, asset) {
  //   return accumulator + Number(asset?.price * wallet[asset.symbol].amt);
  // }, 0);
  return (
    <section className={styles.chart_stats}>
      <h3>Wallet Summary</h3>
      <div className={styles.chart_cards}>
        {" "}
        <StatsCard name="balance">
          {" "}
          {
           Number(walletBalance).toPrecision(3)
           
          }
        </StatsCard>
        {/* <StatsCard name="change">
          {0 + "%"}
        </StatsCard> */}
      </div>
    </section>
  );
};

export default ChartStats;
