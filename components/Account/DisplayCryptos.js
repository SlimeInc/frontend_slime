import Section from "../Section";
import styles from "./Account.module.scss";
import AccountCard from "./AccountCard";

export const DisplayCryptos = ({ cryptos }) => {
  cryptos = cryptos?.slice(0, 12);
  return (
    <Section>
      <h2>Trending coins</h2>
      <div className={styles.display_cryptos}>
        {cryptos?.map((coin) => (
          <AccountCard coin={coin} key={coin.name} />
        ))}
      </div>
    </Section>
  );
};
