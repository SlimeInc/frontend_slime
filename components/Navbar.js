import React, { useContext } from "react";

import styles from "./Navbar.module.scss";
import detectEthereumProvider from "@metamask/detect-provider";

import { TransactionContext } from "../context/TransactionContext";
import NavbarItem from "./NavbarItem";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();

  const { connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction } = useContext(TransactionContext)


  let scroll;
  useEffect(() => {
    scrollY.onChange((latest) => {
      scroll = latest;
      console.log(scroll);
    });
  }, []);

  return (
    <div className={styles.Navigation}>
      <NavbarItem href="/">DigiCrypto</NavbarItem>
      <ul>
        <NavbarItem href="/">Exchange</NavbarItem>
        <NavbarItem href="/">Markets</NavbarItem>
        <NavbarItem href="#about-section">About</NavbarItem>
        {/* <li className={styles.NavButton} onClick={HandleLogin}>
          Login With MetaMask
        </li> */}
        {!currentAccount && (
                <button
                    type="button"
                    onClick={connectWallet}

                >
                    <p>Connect Wallet</p>
                </button>
            )}
      </ul>
    </div>
  );
}
export default Navbar;
// Error: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)
