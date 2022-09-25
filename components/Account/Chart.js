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
  BTC: { amt: "27" },
  USDT: { amt: "27567" },
  SOL: { amt: "34" },
};

export function Chart({ cryptoList }) {
  const label = [];
  const priceTags = [];
  const [dropdown, setdropdown] = useState(false);
  const [whichCoin, setwhichCoin] = useState(0);

  console.log(cryptoList);


  const HandleDrop = () => {
    setdropdown(true);
  };


  
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
      // if(Number((timepoint + 12) % 24) === 0){
      //   label.push('Today')
      // }  // const HandleCoinChange = (val) => {
  //   setwhichCoin(val);
  //   setscaleCh(!scaleCh);
  //   window.dispatchEvent(new Event("resize"));
  // };
      if (timeString.includes("pm")) {
        label.push(Number((timepoint + 12) % 24));
      } else {
        label.push(timepoint % 24);
      }
    }
    timepoint++;
  }
 

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
    fill: true,
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
