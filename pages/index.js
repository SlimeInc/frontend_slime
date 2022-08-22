import React from 'react';
import Article from '../components/Article';
import Section from '../components/Section';
import rafiki from "../public/images/rafiki.png";
import MiddleSection from '../components/MiddleSection';
import Image from 'next/image';
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (

        <>
        <section className={styles.newpage}>
         <>
           {" "}
           <Article>
             {" "}
             <h1> Send and Receive </h1>
             <h1>Trusted Cryptos</h1>
             <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Explicabo dolor modi
             </p>
             <button className={styles.GetStartedButton}>
               {" "}
               Let's get Started
             </button>
           </Article>
           <Image src={rafiki} />
         </>
       </section>
      
       <section className={styles.vecamico}>
        <MiddleSection/>
                           <Article style={{Width:'400px'}}>
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
               Start Earning Instantly
               <span>
                 You’re all set – no further action is needed! You’re now earning
                 compounding interest on your deposits, paid out daily.
               </span>
             </h2>
             <button className={styles.GetStartedButton}>
               Join the DigiCrypto Family
             </button>
           </Article>
         
       </section>
       
  <>
  <div className={styles.space}></div>   
    <section className={styles.rearSection}>
 
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
        <article className={styles.Tristand}>          {" "}
          <h2>
            One wallet for all your needs
            <span>Create your account to buy, exchange and earn interest.</span>
          </h2>
          <h2>
            Top Up Supported Assets
            <span>Deposit crypto or fiat to your DigiCrypto account.</span>
          </h2>
        </article>
        <article className={styles.Tristand}>          {" "}
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
   </>
        </>
        

  )
}

export default Home