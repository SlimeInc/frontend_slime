import React from "react";
import Article from "../components/Article";
import Footer from "../components/Footer";
import { motion, useInView } from "framer-motion";
import rafiki from "../public/images/rafiki.png";
import MiddleSection from "../components/MiddleSection";
import Image from "next/image";
import MetamaskSection from "../components/Metamask"
import styles from "../styles/Home.module.scss";
//import Newcurve from "../components/Newcurve";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Home = () => {
  const MotionComponent = motion(Article, { forwardMotionProps: true });
  const ref = useRef(null);
  const IsInview = useInView(ref, { amount: 0.5 });
  const ref2 = useRef(null);
  const Inview = useInView(ref2, { amount: 0.5 });
  const el = useRef(null);
  const typed = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: ["<h1>Send and Receive</h1> Trusted Cryptos"],
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <div className={styles.LandingPage}>
      <section className={styles.firstSection}>
        {" "}
        <div className={styles.div}>
          {" "}
          <Article>
            <h1 ref={el} />
            {/* <h1>Trusted Cryptos</h1> */}
            <motion.p
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ type: "spring", duration: 6, bounce: 0.3 }}
            >
              A simple and intuitive way to crypto
            </motion.p>
            <button className={styles.GetStartedButton}>
              {" "}
              Let's get Started
            </button>
          </Article>
          <Image src={rafiki} className={styles.image_div}/>
        </div>
      {/* <Newcurve /> */}
      </section>
      <section className={styles.middleSection}>
        <MiddleSection />
        <article className={styles.Message}
          ref={ref}
          style={{
            transform: IsInview ? "none" : "translateX(200px)",
            opacity: IsInview ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
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
        </article>
      </section>
      <section className={styles.metamaskSection}>
        <MetamaskSection />
        <article className={styles.Message}
          ref={ref2}
          style={{
            transform: IsInview ? "none" : "translateX(200px)",
            opacity: IsInview ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2>
            Metamask
            <span>All acounts are provided by Metamask.</span>
          </h2>
          <h2>
            Why Metamask?
            <span>
Metamask is a safe and secure wallet that will ensure ease of acess and management of your funds. it backs this up with a user friendly interface to making it quite easy to use.
            </span>
          </h2>
          <button className={styles.GetStartedButton}>
            Join the DigiCrypto Family
          </button>
        </article>
      </section>
      <Footer/>

      {/* <section className={styles.rearSection} id="#about-section">
        <div className={styles.space}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,192L120,176C240,160,480,128,720,128C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
        </div>{" "}
        <div className={styles.div}>
          <article className={styles.Tristand}>
            {" "}
            <h2 className={styles.interactUs}>
              Follow
              <span>
                <ul className={styles.socialMedia}>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
                </ul>
              </span>
            </h2>
          </article>
          <article className={styles.Tristand}>
            {" "}
            <h2 className={styles.Features}>
              Features
              <span>
                <ul className={styles.Services}>
                <li>Wallet</li>
                <li>Exchange</li>
                <li>Charts</li>
                <li>Wallet</li>
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
                <li>FAQ</li>
                <li>Wallet</li>
                <li>Wallet</li>
                <li>Wallet</li>
                </ul>
              </span>
            </h2>
          </article>{" "}
        </div>
      </section> */}
    </div>
  );
};
export default Home;
