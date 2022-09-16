import styles from "./Navbar.module.scss";
import detectEthereumProvider from "@metamask/detect-provider";
import NavbarItem from "./NavbarItem";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();

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
      alert("Please install MetaMask!");
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
      {console.log(scroll, "lasklj")}
      <NavbarItem href="/" className={styles.Logo}>DigiCrypto</NavbarItem>
      <ul>
        <NavbarItem href="/">Markets</NavbarItem>
        <NavbarItem href="#about-section">About</NavbarItem>
        <li className={styles.NavButton} onClick={HandleLogin}>
          Login With MetaMask
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
// Error: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)
