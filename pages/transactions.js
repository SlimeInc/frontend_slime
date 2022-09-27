import TransactionHead from "../components/Transactions/TransactionHead";
import TransactionCard from "../components/Transactions/TransactionCard";
import TransactionsHolder from "../components/Transactions/TransactionsHolder";
import styles from "../components/Main.module.scss";

import { TransactionContext } from "../context/TransactionContext";
import { useContext, useState } from "react";

const TransactionsFrame = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  amount,
}) => {
  return (
    <div>
      <div>
        <a
          href={`https://goerli.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noreferrer"
        >
          <p className="">From: {addressFrom}</p>
        </a>
        <a
          href={`https://goerli.etherscan.io/address/${addressTo}`}
          target="_blank"
          rel="noreferrer"
        >
          <p className="">To: {addressTo}</p>
        </a>
        <p>Amount: {amount} Eth</p>
        {message && (
          <>
            <p>Message: {message}</p>
          </>
        )}
      </div>
      <div>
        <p>{timestamp}</p>
      </div>
      <br />
    </div>
  );
};

function Transactions() {
  const { transactions } = useContext(TransactionContext);
  const { currentAccount } = useContext(TransactionContext);

  const [search, setsearch] = useState("");
  const [transType, settransType] = useState({
    all: true,
    received: false,
    sent: false,
  });
  console.log("current transactions: ", transactions);
  return (
    <>
      <TransactionHead
        transType={transType}
        settransType={settransType}
        search={search}
        setsearch={setsearch}
      />
      {currentAccount ? (
        <h3>All Recent Transactions</h3>
      ) : (
        <h3>Connect to Metamask to see your recent transactions.</h3>
      )}
      <TransactionsHolder>
        {/* {console.log(Search(search, transactions))} */}
        {search == ""
          ? transType.all &&
            transactions
              .reverse()
              .map((transaction, i) => (
                <TransactionCard key={i} data={transaction} />
              ))
          : transType.all &&
            transactions
              .filter(
                (any) =>
                  (any.addressTo === search) | (any.addressFrom == search)
              )
              ?.map((any, i) => <TransactionCard key={i} data={any} />)}

        {transType.sent &&
          transactions?.map(
            (any, i) => !any.receiving && <TransactionCard key={i} data={any} />
          )}

        {transType.received &&
          transactions?.map(
            (any, i) => any.receiving && <TransactionCard key={i} data={any} />
          )}
      </TransactionsHolder>
    </>
  );
}

export default Transactions;
