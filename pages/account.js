import axios from "axios";
import AccountHead from "../components/Account/AccountHead";
import AccountRow from "../components/Account/AccountRow";
import { useState, useEffect } from "react";
import LineChart from "../components/Account/LineChart";
import { DisplayCryptos } from "../components/Account/DisplayCryptos";

const wallet = {
  ETH: { amt: "27" },
  USDT: { amt: "27567" },
  SOL: { amt: "34" },
};
let cryptos;

function account() {
  const [cryptoList, setcryptoList] = useState([]);

  const baseUrl = "https://coinranking1.p.rapidapi.com/";
  const url = baseUrl + "coins";

  useEffect(() => {
    axios({
      method: "get",
      url: url,
      headers: {
        "X-RapidAPI-Key": "2c2471d33emshc7b01b1765b7f77p11e8e4jsn188a88417780",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    })
      .then((res) => {
        cryptos = res.data.data.coins;
        return cryptos;
      })
      .then((cryptos) => {
        cryptos.filter(function (crypto) {
          if (wallet.hasOwnProperty(crypto.symbol)) {
            setcryptoList((arr) => [...arr, crypto]);
            console.log(crypto.symbol);
          }
        });
      });
  }, []);

  return (
    <>
      <h1>Your Assets</h1>
      <AccountHead />
      <>
        {cryptoList.map((crypto) => (
          <AccountRow
            coin={crypto}
            wallet={wallet[crypto.symbol].amt}
            key={crypto.uuid}
          />
        ))}
      </>
      <>
        <LineChart cryptoList={cryptoList} />
      </>
      <>{/* <DisplayCryptos cryptoList={cryptoList} /> */}</>
    </>
  );
}

export default account;
