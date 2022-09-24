import React from "react";
import styles from "../styles/Home.module.scss";

function Footer() {
  return (
    <div>
      {" "}
      {
        <section className={styles.rearSection} id="about-section">
          {/* <div className={styles.space}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fff"
                fill-opacity="1"
                d="M0,192L120,176C240,160,480,128,720,128C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
              ></path>
            </svg>
          </div>{" "} */}
          <div className={styles.div}>
            <article className={styles.Tristand}>
              {" "}
              <h2>
                Follow
                <span>
                  <ul>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                  </ul>
                </span>
              </h2>
            </article>
            <article className={styles.Tristand}>
              {" "}
              <h2>
                Features
                <span>
                  <ul>
                    <li>
                      <a href="#">Wallets</a>
                    </li>
                    <li>
                      <a href="#">Exchange</a>
                    </li>
                    <li>
                      <a href="#">Charts</a>
                    </li>
                  </ul>
                </span>
              </h2>
            </article>

            <article className={styles.Tristand}>
              {" "}
              <h2>
                Help
                <span>
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Wallet</a>
                    </li>
                    <li>
                      <a href="#">Charts</a>
                    </li>
                  </ul>
                </span>
              </h2>
            </article>
            <article className={styles.Tristand}>
              {" "}
              <h2 className={styles.Text}>
                DigiCrypto
                <span>
                  Digicrypto is committed to ensuring safe and seamless
                  transmsfer and managemnet of funds wherever, whenever and
                  however you want it.
                </span>
              </h2>
            </article>
          </div>
        </section>
      }
    </div>
  );
}

export default Footer;
