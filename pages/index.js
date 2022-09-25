import React from "react";
import Article from "../components/Article";
import Footer from "../components/Footer";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import MiddleSection from "../components/MiddleSection";
import { useState } from "react";
import MetamaskSection from "../components/Metamask";
import styles from "../styles/Home.module.scss";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import Carousel from "../components/Exchange/Carousel";
import TeamSection from "../components/Team"

////////////
const baseUrl = "https://coinranking1.p.rapidapi.com/";
const url = baseUrl + "coins";
const Home = () => {
  const [cryptos, setcryptos] = useState([]);
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
      typed.current.destroy();
    };
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: url,
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "20",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "2c2471d33emshc7b01b1765b7f77p11e8e4jsn188a88417780",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    }).then((res) => {
      // cryptos = res?.data?.data?.coins;
      setcryptos(res?.data?.data?.coins);
      console.log(res?.data?.data.coins);
      return cryptos;
    });
  }, []);
  return (
    <div className={styles.LandingPage}>
      <section className={styles.firstSection}>
      {/* <img src="images/dashboard.png" className={styles.image_div} /> */}
        <div className={styles.wrapper}>
          <div className={styles.div}>
            <Article>
              <h1 ref={el} />
              <motion.p
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ type: "spring", duration: 6, bounce: 0.3 }}
              >
                A simple and intuitive way to crypto
              </motion.p>
              <button className={styles.GetStartedButton}>
                Let's get Started
              </button>
            </Article>
            
          </div>
          
        </div>
      </section>
      <Carousel data={cryptos} className={styles.carousel} />

      <section className={styles.middleSection}>
        <div className={styles.wrapper}>
          <MiddleSection />
          <article
            className={styles.Message}
            ref={ref}
            style={{
              transform: IsInview ? "none" : "translateX(100px)",
              opacity: IsInview ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <h2>
              One wallet for all your needs
              <span>
                Create your account to buy, exchange and earn interest.
              </span>
            </h2>
            <h2>
              Top Up Supported Assets
              <span>Deposit crypto or fiat to your DigiCrypto account.</span>
            </h2>
            <h2>
              Decentralized
              <span>
                You’re all set – no further action is needed! You’re now <br />
                earning compounding interest on your deposits, paid out daily.
              </span>
            </h2>
            <button className={styles.GetStartedButton}>
              Join the DigiCrypto Family
            </button>
          </article>
        </div>
      </section>
      <section className={styles.metamaskSection}>
        <div className={styles.wrapper}>
          {" "}
          <MetamaskSection />
          <article
            className={styles.Message}
            ref={ref2}
            style={{
              transform: Inview ? "none" : "translateX(100px)",
              opacity: Inview ? 1 : 0,
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
                Metamask is a safe and secure wallet that will ensure ease of
                acess and management of your funds.
              </span>
              <span>
                it backs this up with a user friendly interface to making it
                quite easy to use.
              </span>
            </h2>
            <button className={styles.GetStartedButton}>
              Join the DigiCrypto Family
            </button>
          </article>
        </div>
      </section>
      <section className={styles.metamaskSection}>
        <div className={styles.wrapper}>
          {" "}
          <TeamSection />
          
        </div>
      </section>
      <Footer />
    </div>
  );
};

// This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(url, {
//     method: "GET",
// params: {
//   referenceCurrencyUuid: "yhjMzLPhuIDl",
//   timePeriod: "24h",
//   "tiers[0]": "1",
//   orderBy: "marketCap",
//   orderDirection: "desc",
//   limit: "20",
//   offset: "0",
// },
//     headers: {
//       "X-RapidAPI-Key": "2c2471d33emshc7b01b1765b7f77p11e8e4jsn188a88417780",
//       "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//     },
//   });
//   const cryptos = await res.json();
//   // const cryptos = await data.data.coins
//   console.log(cryptos.data.coins);
//   // Pass data to the page via props
//   return { props: { cryptos } || { cryptos: `czechoslav` } };

//   console.log(`are we there yet `);
// }
export default Home;

// useEffect(() => {
//   axios({
//     method: "get",
//     url: url,
//     headers: {
//       "X-RapidAPI-Key": "2c2471d33emshc7b01b1765b7f77p11e8e4jsn188a88417780",
//       "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//     },
//   })
//     .then((res) => {
//       cryptos = res.data.data.coins;
//       return cryptos;
//     })
//     .then((cryptos) => {
//       cryptos.filter(function (crypto) {
//         if (wallet.hasOwnProperty(crypto.symbol)) {
//           setcryptoList((arr) => [...arr, crypto]);
//         }
//       });
//     });
// }, []);
