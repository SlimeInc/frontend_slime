import Section from "../Section";
import styles from "./Account.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {useState} from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Watch how your coins are evolving throughout the year ",
    },
  },
};

let labels = [];
let priceTags = []
let timePoint= new Date().getHours().toLocaleString()
export function LineChart({cryptoList}) {
  const [whichCoin, setwhichCoin] = useState(2)
  for (let index = 0; index < cryptoList[whichCoin]?.sparkline.length; index++) {
    priceTags.push(cryptoList[whichCoin]?.sparkline[index])
    labels.push(Math.abs((timePoint-(24+index))%24))
  }
const data = {
  labels:labels,
  datasets:[
    {
      label:`${cryptoList[whichCoin]?.name} price in USD`,
      data: priceTags,
      backgroundColor:cryptoList[whichCoin]?.color,
      borderColor:cryptoList[whichCoin]?.color
    }
  ]
}
  console.log(priceTags , labels)
  return (
    <div>
      <Line className={styles.chart} data={data}  />;
      <Line className={styles.chart} data={data}  />;
    </div>
  );
}

export default LineChart;
