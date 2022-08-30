import styles from "./Exchange.module.scss";
import { motion } from "framer-motion";

const Connector = () => {
  const transition = { duration: 1, ease: "easeInOut" };

  return (
    <div className={styles.connector}>
      <svg
        width="10"
        height="80"
        viewBox="0 0 1 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="0.5"
          y1="539.017"
          x2="0.5"
          y2="0.983276"
          stroke="black"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={transition}
        />
      </svg>
      {/* <svg
        width="2"
        height="80"
        viewBox="0 0 2 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          opacity="0.5"
          d="M 300 100 L 300 400"
          stroke="#5A1017"
          stroke-width="2"

        />
      </svg> */}
    </div>
  );
};

export default Connector;
