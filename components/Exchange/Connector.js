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
    </div>
  );
};

export default Connector;
