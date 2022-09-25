import React from "react";
import styles from "./Navbar.module.scss";
import detectEthereumProvider from "@metamask/detect-provider";
import NavbarItem from "./NavbarItem";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdMenu } from "react-icons/md";
import Popup from "./Popup";

function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [popup, setPopup] = useState(false);
  const router = useRouter();

  const HandleLogin = async () => {
    const provider = await detectEthereumProvider({ mustBeMetaMask: true });
    if (provider) {
      console.log("Ethereum successfully detected!");
      // From now on, this should always be true:
      // provider === window.ethereum;

      // Legacy providers may only have ethereum.sendAsync
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      router.push("/account");
    } else {
      // if the provider is not detected, detectEthereumProvider resolves to null
      setPopup(true);
      console.log(`gimme some time to think`, popup);
    }
  };

  return (
    <div className={styles.Navigation}>
      <div className={styles.nav}>
        <NavbarItem href="/">DigiCrypto</NavbarItem>
        <ul className={styles.navbar}>
          <NavbarItem href="/">Markets</NavbarItem>
          <NavbarItem href="#about-section">About</NavbarItem>
          <li className={styles.NavButton} onClick={HandleLogin}>
            Login With MetaMask
          </li>
        </ul>
        <MdMenu className={styles.navbar__menu} />
      </div>
      {popup && (
        <div onClick={() => setPopup(false)} className={styles.popup_content}>
          <Popup />
        </div>
      )}
    </div>
  );
}
export default Navbar;
// Error: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)
