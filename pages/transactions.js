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
  address: "afs",
  tokens: "Ether",
};

const datum = {
  brief: true,
  amount: "3",
  date: date.getHours(),
  receiving: false,
  address: "sf4ss",
  tokens: "Ether",
};
function transactions() {
  const [search, setsearch] = useState("");
  const [transType, settransType] = useState({
    all: true,
    received: false,
    sent: false,
  });
  // function selector(search, any) {
  //     return any.address == search && <TransactionCard data={any} />;
  //   }
  // }

  const dataArr = [data, datum, data, datum, data, datum, data];

  // function HandleCards(transType, arr) {
  //   transType.all && arr?.map((any) => <TransactionCard data={any} />);

  //   transType.sent &&
  //     arr?.filter((any) => !any.receiving && <TransactionCard data={any} />);

  //   transType.received &&
  //     arr?.filter((any) => any.receiving && <TransactionCard data={any} />);
  // }

  const [sort, setsort] = useState({ oldest: true, newest: false });
  return (
    <>
      <TransactionHead
        transType={transType}
        settransType={settransType}
        search={search}
        setsearch={setsearch}
      />
      <TransactionsHolder>
        {/* {console.log(Search(search, dataArr))} */}
        {search == ""
          ? transType.all &&
            dataArr.map((any) => <TransactionCard data={any} />)
          : transType.all &&
            dataArr
              .filter((any) => any.address === search)
              ?.map((any) => <TransactionCard data={any} />)}

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
