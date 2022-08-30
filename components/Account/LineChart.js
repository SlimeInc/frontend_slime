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

export function LineChart() {
  console.log(cryptoList)

  return (
    <div>
      <Line options={options} data={data} className={styles.chart} />;
    </div>
  );
}

export default LineChart;
