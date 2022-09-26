import TransactionHead from "../components/Transactions/TransactionHead";
import TransactionCard from "../components/Transactions/TransactionCard";
import TransactionsHolder from "../components/Transactions/TransactionsHolder";
import { useState } from "react";
import styling from "../components/Main.module.scss";

const date = new Date();
function ModifyTime(t) {
  let t1;
  if (t < 60 * 1000) {
    return `just now `;
  }

  if (t < 60 * 60 * 1000) {
    return `${t % 60000} minutes ago`;
  }
  if (t < 24 * 60 * 60 * 1000) {
    return `${(t % 60) * 60 * 1000} hours ago`;
  }

  // if(t > 30*60*1000){
  //   return `30 minutes ago`
  // }
  // if(t < 61*60*1000){
  //  return `1 hour ago`
  // }
  // if(t<)
}

const data = {
  brief: true,
  amount: "3",
  date: date.getHours(),
  receiving: true,
  address: "sf432543fkjskugsiufidsfioasafs",
  tokens: "Ether",
};

const datum = {
  brief: true,
  amount: "3",
  date: date.getHours(),
  receiving: false,
  address: "sf4sjgksdfidsfioasasdfjdskfs",
  tokens: "Ether",
};
function transactions() {
  const [transType, settransType] = useState({
    all: true,
    received: false,
    sent: false,
  });
  const dataArr = [data, datum, data, datum, data, datum, data];
  const Search = (keyword , arr)=>{
  
  }
  function HandleCards(transType, arr) {
    transType.all && arr?.map((any) => <TransactionCard data={any} />);

    transType.sent &&
      arr?.filter((any) => !any.receiving && <TransactionCard data={any} />);

    transType.received &&
      arr?.filter((any) => any.receiving && <TransactionCard data={any} />);
  }

  const [sort, setsort] = useState({ oldest: true, newest: false });
  return (
    <>
      <TransactionHead transType={transType} settransType={settransType} />
      <TransactionsHolder>

        {transType.all && dataArr?.map((any) => <TransactionCard data={any} />)}

        {transType.sent &&
          dataArr?.map(
            (any) => !any.receiving && <TransactionCard data={any} />
          )}

        {transType.received &&
          dataArr?.map(
            (any) => any.receiving && <TransactionCard data={any} />
          )}
      </TransactionsHolder>
    </>
  );
}

export default transactions;
