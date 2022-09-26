import React from "react";
import styles from "../styles/Home.module.scss";
import {
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
  AiFillRedditSquare,
} from "react-icons/ai";
function Footer() {
  return (
    <div className={styles.rear}>
      {" "}
      {
        <section className={styles.footer} id="about-section">
          <div className={styles.wrapper}>
            {/* <div className={styles.div}> */}
            <article className={styles.tristand}>
              <h3>Join the Family </h3>

              <ul className={styles.flexi}>
                <li>
                  <a href="#">
                    <AiFillTwitterSquare className={styles.icon} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineInstagram className={styles.icon} />{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineFacebook className={styles.icon} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillRedditSquare className={styles.icon} />
                  </a>
                </li>
              </ul>
            </article>
            <article className={styles.tristand}>
              <ul className={styles.flexo}>
              <li>
                  <a href="#" className={styles.text}>Markets</a>
                </li>
                <li>
                  <a href="#" className={styles.text}>Metamask</a>
                </li>
                <li>
                  <a href="#" className={styles.text}>Charts</a>
                </li>
                {/* <li>
                  <a href="#" className={styles.text}>Charts</a>
                </li> */}
              </ul>
            </article>
            {/* <article className={styles.Tristand}>
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
            </article> */}

            <article className={styles.tristand}>
              <ul className={styles.flexo}>
              <li>
                  <a href="#" className={styles.text}>HELP</a>
                </li>
                <li>
                  <a href="#" className={styles.text}>FAQ</a>
                </li>
                <li>
                  <a href="#" className={styles.text}>Wallet</a>
                </li>
                {/* <li>
                  <a href="#" className={styles.text}>Charts</a>
                </li> */}
              </ul>
            </article>
            {/* <article className={styles.Tristand}>
              {" "}
              <h2 className={styles.Text}>
                DigiCrypto
                <span>
                  Digicrypto is committed to ensuring safe and seamless
                  transmsfer and managemnet of funds wherever, whenever and
                  however you want it.
                </span>
              </h2>
            </article> */}
            {/* </div> */}
          </div>
        </section>
      }
    </div>
  );
}

export default Footer;
//  RiFacebookBoxLine
