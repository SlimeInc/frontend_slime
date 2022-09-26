import styles from "../styles/Home.module.scss";
import detectEthereumProvider from "@metamask/detect-provider";

const Popup = ({ setpop }) => {
  const IsMetaMaskInstalled = async () => {
    const provider = await detectEthereumProvider({ mustBeMetaMask: true });
    if (provider) {
      console.log("Ethereum successfully detected!");
    }
  };
  return (
    <div className={styles.popup}>
      <h3>Please install MetaMask!</h3>
      <div>
        <button
          className={styles.GetStartedButton}
          onClick={() => setpop(false)}
        >
          {" "}
          Cancel{" "}
        </button>
        <a href="https://metamask.io/download/" target="_blank">
          {" "}
          <button className={styles.NavButton}> Click to install </button>
        </a>
      </div>
    </div>
  );
};

export default Popup;
