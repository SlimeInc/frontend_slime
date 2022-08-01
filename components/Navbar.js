import Link from "next/link";
import styles from './Navbar.module.scss'
import detectEthereumProvider from '@metamask/detect-provider'



function Navbar() {

  const HandleLogin = async ()=>{
    const provider = await detectEthereumProvider({mustBeMetaMask:true})

    if (provider) {
    
      console.log('Ethereum successfully detected!')
      // From now on, this should always be true:
      // provider === window.ethereum
    
      // Access the decentralized web!
    
      // Legacy providers may only have ethereum.sendAsync
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
    } else {
    
      // if the provider is not detected, detectEthereumProvider resolves to null
      alert('Please install MetaMask!')
    }
  }
  return (
    <div className={styles.Navigation}>
      <div>
        <Link href="/">
          <a> DigiCrypt </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/dashboard">
            <a> Markets </a>
          </Link>
        </li>
        <li>
          <Link href="/tutorials">
            <a> Tutorials </a>
          </Link>
        </li>
        <li>
          <Link href="/exchanges">
            <a> Exchanges </a>
          </Link>
        </li>
        <li>
          <Link href="/account">
            <a> Account </a>
          </Link>
        </li>
        <li>
          <button className={styles.NavButton} onClick={()=>HandleLogin()}> SignUp </button>
        </li>
      </ul>
    </div >
  );
}
export default Navbar;
// Error: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)