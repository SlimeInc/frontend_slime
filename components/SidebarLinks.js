import styles from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem";
import { MdSwitchAccount, MdOutlineHistory } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
const SidebarLinks = () => {
  return (
    <div className={styles.sidebar_links}>
      <SidebarItem href="/account">
        <MdSwitchAccount /> <span>Account</span>
      </SidebarItem>
      <SidebarItem href="/exchanges">
        <GiPayMoney /> <span> Exchange</span>
      </SidebarItem>
      <SidebarItem href="/transactions">
        <MdOutlineHistory/> <span>History</span>
      </SidebarItem>
      <SidebarItem href="/market">Market</SidebarItem>
    </div>
  );
};

export default SidebarLinks;
