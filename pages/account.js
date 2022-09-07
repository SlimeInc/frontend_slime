import axios from "axios";
import AccountHead from "../components/Account/AccountHead";
import AccountRow from "../components/Account/AccountRow";
import { useState, useEffect } from "react";
import Chart from "../components/Account/Chart";
import { DisplayCryptos } from "../components/Account/DisplayCryptos";
import styles from "../components/Account/Account.module.scss";
import BeforeAssets from "../components/Account/BeforeAssets";
import { motion } from "framer-motion";
import ChartStats from "../components/Account/ChartStats";

const wallet = {
  ETH: { amt: "27" },
  USDT: { amt: "27567" },
  SOL: { amt: "34" },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 6,
      delayChildren: 1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const listItem2 = {
  hidden: { scale: 0.99 },
  show: { scale: 1 },
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
          }
        });
      });
  }, []);
  return (
    <>
      {cryptos?.length || <h2>It seems there are no assets yet</h2>}
      {cryptos ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={styles.main}
        >
          <h1 className={styles.your_asset}>Assets</h1>
          <section className={styles.assets_card}>
            <AccountHead />
            {cryptoList.map((crypto) => (
              <AccountRow
                coin={crypto}
                wallet={wallet[crypto.symbol].amt}
                key={crypto.uuid}
                variants={listItem}
              />
            )) || <BeforeAssets />}
          </section>
          <section className={styles.chart_section}>
            <Chart cryptoList={cryptoList} />
             <ChartStats cryptoList={cryptoList}/>
          </section>
          <DisplayCryptos cryptos={cryptos} variants={listItem} />
        </motion.div>
      ) : (
        <BeforeAssets />
      )}
    </>
  );
}

export default account;
