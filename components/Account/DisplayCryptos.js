import Section from "../Section";
import AccountCard from "./AccountCard";

export const DisplayCryptos = ({ cryptos }) => {
  console.log(cryptos)
  return (
    <Section>
      <div>
        {/* {cryptos?.map((coin) => (
          <AccountCard coin={coin} key={coin.name}/>
        ))} */}
      </div>
    </Section>
  );
};
