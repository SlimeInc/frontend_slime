import styles from "./Sidebar.module.scss";
import { AiOutlineCopy } from 'react-icons/ai'

const AvatarSection = ({ pic, name }) => {

  const copyWallet = () => {
    navigator.clipboard.writeText(name).then( () => {
      alert(`${name} Address copied!`)
    }
    )
    navigator.clipboard.readText().then(text => {
      console.log("Copied text: ", text)
    })
  }


  return (
    <div className={styles.avatar_section}>
      <div className={styles.avatar_pic}>
        {" "}
        <img src='images/logos_metamask-icon.png' layout="intrinsic"></img>
      </div>
      <span>Current Wallet:</span>
      <div className={styles.wallet_div} onClick={copyWallet}>
        <span>{name?.slice(1,5)}...{name.slice(name.length-4)}</span>
        <AiOutlineCopy />
      </div>
    </div>
  );
};

export default AvatarSection;
