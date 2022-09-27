import TransactionHead from "../components/Transactions/TransactionHead";
import TransactionCard from "../components/Transactions/TransactionCard";
import TransactionsHolder from "../components/Transactions/TransactionsHolder";
import styles from "../components/Main.module.scss";

import { TransactionContext } from "../context/TransactionContext";
import { useContext } from "react";

const date = new Date();



const TransactionsFrame = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  return (
    <div>
      <div>
        <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {addressFrom}</p>
        </a>
        <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
          <p className="text-white text-base">To: {addressTo}</p>
        </a>
      </div>
    </div>
  )
}


function Transactions() {
  const { transactions, currentAccount } = useContext(TransactionContext)
  
  console.log("current transactions: ", transactions)
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
