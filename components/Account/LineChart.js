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
      display: true,
      text: "Watch how your coins are evolving throughout the year ",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Ethereum",
      data: labels.map(() => Math.random()),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      fill: false,
    },
    {
      label: "USDT",
      data: labels.map(() => Math.random()),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      fill: false,
    },
    {
      label: "Solana",
      data: labels.map(() => Math.random()),
      borderColor: "rgb(53, 50, 0, 0.5)",
      backgroundColor: "rgba(53, 50, 0, 0.5)",
      fill: false,
    },
  ],
};

export function LineChart() {
  return (
    <div>
      <Line options={options} data={data} className={styles.chart} />;
    </div>
  );
}

export default LineChart;
