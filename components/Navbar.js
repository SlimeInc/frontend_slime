import styles from "./Navbar.module.scss";
import detectEthereumProvider from "@metamask/detect-provider";
import NavbarItem from "./NavbarItem";

function Navbar() {
  const HandleLogin = async () => {
    const provider = await detectEthereumProvider({ mustBeMetaMask: true });

    if (provider) {
      console.log("Ethereum successfully detected!");
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
      alert("Please install MetaMask!");
    }
  };
  return (
    <div className={styles.Navigation}>
      <NavbarItem href="/">DigiCrypto</NavbarItem>
      <ul>
        <NavbarItem href="/account">Account</NavbarItem>
        <NavbarItem href="/exchanges">Exchanges</NavbarItem>
        <NavbarItem href="/transactions">Transactions</NavbarItem>
        <NavbarItem href="Account/">Tutorials</NavbarItem>
      </ul>
    </div>
  );
}
export default Navbar;
// Error: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)
