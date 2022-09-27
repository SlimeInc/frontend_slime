import styles from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem";
import { MdSwitchAccount, MdOutlineHistory } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import {  BsCurrencyExchange } from "react-icons/bs"


const SidebarLinks = () => (
  <div className={styles.sidebar_links}>
    <SidebarItem href="/account">
      <MdSwitchAccount /> <span>Account</span>
    </SidebarItem>
    <SidebarItem href="/exchanges">
      <GiPayMoney /> <span>Transfer</span>
    </SidebarItem>
    <SidebarItem href="/transactions">
      <MdOutlineHistory /> <span>History</span>
    </SidebarItem>
    <SidebarItem href="https://coinranking.com/markets">
      <BsCurrencyExchange /><span>Market</span> 
      </SidebarItem>
  </div>
);

export default SidebarLinks;
