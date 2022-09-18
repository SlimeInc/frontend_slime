import TransactionHead from "../components/Transactions/TransactionHead";
import TransactionCard from "../components/Transactions/TransactionCard";
import TransactionsHolder from "../components/Transactions/TransactionsHolder";
import styling from "../components/Main.module.scss";

const date = new Date();

const data = {
  brief: true,
  amount: "3",
  date: date.getHours(),
  receiving: true,
  address: "sf432543fkjskugsiufidsfioasafs",
  tokens: "Ether",
};
function transactions() {
  return (
    <div className={styling.main}>
      <TransactionHead />
      <TransactionsHolder>
        <TransactionCard data={data} />
        <TransactionCard data={data} />
        <TransactionCard data={data} />
        <TransactionCard data={data} />
        <TransactionCard data={data} />
        <TransactionCard data={data} /> <TransactionCard data={data} />
        <TransactionCard data={data} />
        <TransactionCard data={data} />
      </TransactionsHolder>
      ;
    </div>
  );
};

export default transactions;
