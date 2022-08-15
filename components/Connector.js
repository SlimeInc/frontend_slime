import styles from "./Main.module.scss";

const Connector = () => {
  return (
    <div className={styles.connector}>
      <svg
        width="2"
        height="80"
        viewBox="0 0 2 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M1 169L1 0.994019"
          stroke="#5A1017"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

export default Connector;
