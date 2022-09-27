import TransactionHead from "../components/Transactions/TransactionHead";
import TransactionCard from "../components/Transactions/TransactionCard";
import TransactionsHolder from "../components/Transactions/TransactionsHolder";
import styles from "../components/Main.module.scss";

import { TransactionContext } from "../context/TransactionContext";
import { useContext } from "react";




const TransactionsFrame = ({ addressTo, addressFrom, timestamp, message, amount }) => {
  
  return (
    <div>
      <div>
        <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="">From: {addressFrom}</p>
        </a>
        <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
          <p className="">To: {addressTo}</p>
        </a>
        <p>Amount: {amount} Eth</p>
        {message && 
          <>
            <br />
            <p>Message: {message}</p>
          </>
        }
      </div>
      <div>
        <p>{timestamp}</p>
      </div>
    </div>
  )
}


function Transactions() {
  const { transactions, currentAccount } = useContext(TransactionContext)
  
  console.log("current transactions: ", transactions)
  return (
    <div className={styles.all_txt}>
      {currentAccount ? (
        <h3>All Recent Transactions</h3>
      ) : (
        <h3>Connect to Metamask to see your recent transactions.</h3>
      )}
      <div>
        {
          [...transactions].reverse().map((transaction, i) => (
            <TransactionsFrame key={i} {...transaction} />
          ))
        }
      </div>

    </div>
   
  );
};

export default Transactions;
