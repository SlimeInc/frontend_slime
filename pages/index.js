import React from 'react';
import Article from '../components/Article';
import Section from '../components/Section';
import rafiki from "../public/images/rafiki.png";
import Image from 'next/image';
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div >
        <div className={styles.newpage}>
        <Section>
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
       </Section>
       <div>
        <ul>
          <li><Image></Image></li>
        </ul>
       </div>
        </div>
        <div>Lorem</div>
    </div>
  )
}

export default Home