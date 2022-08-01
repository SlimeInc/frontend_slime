import BitcoinAmico from "../public/images/Bitcoin-amico 1.png";
import VecAmico from "../public/images/VecAmico.png";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className={styles.LandingPage}>
      <Navbar />
      <section className={styles.Fsection}>
        <div className={styles.Message}>
          <h1> Send and Receive </h1>
          <h1>Trusted Cryptos</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolor modi
          </p>
          <button className={styles.GetStartedButton}>
            {" "}
            Let's get Started
          </button>
        </div>
        <div>
          {" "}
          <Image src={BitcoinAmico} />
        </div>
      </section>
      <section className={styles.Fsection}>
        <div className={styles.ImgHolder}>
          <Image src={VecAmico} />
        </div>
        <div className={styles.Message}>
          <h2>
            One wallet for all your needs
            <span>Create your account to buy, exchange and earn interest.</span>
          </h2>
          <h2>
            Top Up Supported Assets
            <span>Deposit crypto or fiat to your DigiCrypto account.</span>
          </h2>
          <h2>
            Start Earning Instantly
            <span>
              You’re all set – no further action is needed! You’re now earning
              compounding interest on your deposits, paid out daily.
            </span>
          </h2>
          <button className={styles.GetStartedButton}>
            Join the DigiCrypto Family
          </button>
        </div>
      </section>
      <section className={styles.Fsection}>
        <article className={styles.Tristand}>
          {" "}
          <h2>
            One wallet for all your needs
            <span>Create your account to buy, exchange and earn interest.</span>
          </h2>
          <h2>
            Top Up Supported Assets
            <span>Deposit crypto or fiat to your DigiCrypto account.</span>
          </h2>
        </article>
        <article className={styles.Tristand}>
          {" "}
          <h2>
            One wallet for all your needs
            <span>Create your account to buy, exchange and earn interest.</span>
          </h2>
          <h2>
            Top Up Supported Assets
            <span>Deposit crypto or fiat to your DigiCrypto account.</span>
          </h2>
        </article>
        <article className={styles.Tristand}>
          {" "}
          <h2>
            One wallet for all your needs
            <span>Create your account to buy, exchange and earn interest.</span>
          </h2>
          <h2>
            Top Up Supported Assets
            <span>Deposit crypto or fiat to your DigiCrypto account.</span>
          </h2>
        </article>
      </section>
    </div>
  );
}

export default Home;
