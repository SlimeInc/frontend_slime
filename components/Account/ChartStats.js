import styles from "./Account.module.scss";
import StatsCard from "./StatsCard";
import { HiOutlineArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi";
const wallet = {
  ETH: { amt: "27" },
  USDT: { amt: "27567" },
  SOL: { amt: "34" },
};
const ChartStats = ({ cryptoList }) => {
  let num, denum;
  num = cryptoList.reduce(function (accumulator, asset) {
    return (
      accumulator +
      Number(asset?.price * wallet[asset.symbol].amt * asset?.change)
    );
  }, 0);
  denum = cryptoList.reduce(function (accumulator, asset) {
    return accumulator + Number(asset?.price * wallet[asset.symbol].amt);
  }, 0);
  return (
    <section className={styles.chart_stats}>
      <h3>Wallet Summary</h3>
      <div className={styles.chart_cards}>
        {" "}
        <StatsCard name="value">
          {" "}
          {
            Number(
              cryptoList?.reduce(function (accumulator, asset) {
                return accumulator + asset?.price * wallet[asset.symbol].amt;
              }, 0)
            ).toFixed(3)
          }
        </StatsCard>
        <StatsCard name="change">
          {((num / denum).toFixed(3) ?? 0) + "%"}
        </StatsCard>
      </div>
    </section>
  );
};

export default ChartStats;
