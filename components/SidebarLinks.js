import styles from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem";
const SidebarLinks = () => {
  return (
    <div className={styles.sidebar_links}>
      <SidebarItem href="/account">Account</SidebarItem>
      <SidebarItem href="/exchanges">Exchange</SidebarItem>
      <SidebarItem href="/transactions">Transactions</SidebarItem>
    </div>
  );
};

export default SidebarLinks;
