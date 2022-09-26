import React, { useContext } from "react";

import styles from "./Navbar.module.scss";

import { TransactionContext } from "../context/TransactionContext";
import NavbarItem from "./NavbarItem";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdMenu } from "react-icons/md";
import Popup from "./Popup";

import detectEthereumProvider from "@metamask/detect-provider";

function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const router = useRouter();
  const [pop, setpop] = useState(false);

  const {
    connectWallet,
    currentAccount,
    formData,
    setFormData,
    handleChange,
    sendTransaction,
  } = useContext(TransactionContext);

  const IsMetaMaskInstalled = async () => {
    const provider = await detectEthereumProvider({ mustBeMetaMask: true });

    if (provider) {
      console.log("Ethereum successfully detected!");
      router.push("/account");
      // From now on, this should always be true:
      // provider === window.ethereum

      // Access the decentralized web!

      // Legacy providers may only have ethereum.sendAsync
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
    } else {
      // if the provider is not detected, detectEthereumProvider resolves to null
      // console.error("Please install MetaMask!", error);
      setpop(true);
      console.log(pop);
    }
  };
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
      <ul className={styles.navbar}>
        <NavbarItem href="/">Exchange</NavbarItem>
        <NavbarItem href="/">Markets</NavbarItem>
        <NavbarItem href="#about-section">About</NavbarItem>
        {!currentAccount && (
          <button
            type="button"
            onClick={() => {
              IsMetaMaskInstalled();
            }}
          >
            {pop && (
              <div
                onClick={() => setpop(false)}
                className={styles.popup_content}
              >
                <Popup pop={pop} setpop={setpop} />
              </div>
            )}{" "}
            <p>Login With MetaMask</p>
          </button>
        )}
      </ul>
    </div>
  );
}
export default Navbar;
// Error: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)
