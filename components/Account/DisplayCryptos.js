import Section from "../Section";
import AccountCard from "./AccountCard";

export const DisplayCryptos = ({ cryptoList }) => {
  return (
    <Section>
      <div>
        {" "}
        {cryptoList.map((coin) => (
          <AccountCard coin={coin} />
        ))}
      </div>
    </Section>
  );
};
