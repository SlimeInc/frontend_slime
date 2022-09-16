import { motion } from "framer-motion";
import styles from "./Account.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import millify from "millify";
import { Line } from "react-chartjs-2";
import { MdOutlineArrowDropDown } from "react-icons/md";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import DropdownMenu from "./DropdownMenu";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
);
const wallet = {
  ETH: { amt: "27" },
  USDT: { amt: "27567" },
  SOL: { amt: "34" },
};

export function Chart({ cryptoList }) {
  const label = [];
  const priceTags = [];
  // let buffer;
  const [dropdown, setdropdown] = useState(false);
  const [whichCoin, setwhichCoin] = useState(0);
  // const [scaleCh, setscaleCh] = useState(false);

  console.log(cryptoList);

  // const HandleCoinChange = (val) => {
  //   setwhichCoin(val);
  //   setscaleCh(!scaleCh);
  //   window.dispatchEvent(new Event("resize"));
  // };
  const HandleDrop = () => {
    setdropdown(true);
  };

  // const getHistory = (uuid, timePeriod = "24h") => {
  //   try {
  //     axios({
  //       method: "GET",
  //       url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/history`,
  //       params: {
  //         referenceCurrencyUuid: "yhjMzLPhuIDl",
  //         timePeriod: timePeriod,
  //       },
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "2c2471d33emshc7b01b1765b7f77p11e8e4jsn188a88417780",
  //         "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  //       },
  //     })
  //       .then((res) => {
  //         buffer = res?.data?.data?.history;
  //         console.log(buffer);
  //         return buffer;
  //       })
  //       .then((buffer) => {
  //         buffer?.map((price) => {
  //           priceTags.push(price.price);
  //           label.push(new Date(price.timestamp).toLocaleTimeString());
  //         });
  //       })
  //       .then(() => {
  //         // setscaleCh(!scaleCh)   hmm....
  //         window.dispatchEvent(new Event("resize"));
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  let timepoint = new Date().getHours();
  let timeString = String(new Date().toLocaleTimeString());

  for (
    let index = 0;
    index < cryptoList[whichCoin]?.sparkline.length;
    index++
  ) {
    priceTags.push(millify(cryptoList[whichCoin]?.sparkline[index]));
    if (index == 24) {
      label.push("now");
    } else {
      if (timeString.includes("pm")) {
        label.push(Number((timepoint + 12) % 24));
      } else {
        label.push(timepoint % 24);
      }
    }
    timepoint++;
    console.log(`sdfksdjf;ds`, priceTags, label);
  }
  // useEffect(() => {
  //   HandleCoinChange;
  // }, [whichCoin]);

  //////////////////////////////////////////////////////////////////////
  const data = {
    labels: label,
    datasets: [
      {
        data: priceTags,
        tension: 0.8,
        showLine: true,
        backgroundColor: cryptoList[whichCoin]?.color,
        borderColor: cryptoList[whichCoin]?.color,
        pointRadius: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    fill: false,
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return `$ ${millify(value)}`;
          },
        },
        grid: {
          display: false,
          borderColor: "white",
        },
      },
      x: {
        grid: {
          borderColor: "white",
          display: false,
        },
      },
    },
  };

  return (
    <section className={styles.chart}>
      <div className={styles.title}>
        <h3>Price change in USD</h3>
        <div className={styles.toggle_coin} onClick={HandleDrop}>
          <span> {cryptoList[whichCoin]?.name} </span>
          <MdOutlineArrowDropDown />{" "}
        </div>
        <DropdownMenu
          whichCoin={whichCoin}
          setWhichCoin={setwhichCoin}
          dropdown={dropdown}
          setdropdown={setdropdown}
        />
      </div>
      <Line data={data} options={options} />
    </section>
  );
}

export default Chart;