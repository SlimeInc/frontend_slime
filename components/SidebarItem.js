import styles from "./Sidebar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const SidebarItem = ({ href, children }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={
          router.pathname == href
            ? styles.sidebar_item_active
            : styles.sidebar_item
        }  
      >
        {children}
      </a>
    </Link>
  );
};

export default SidebarItem;
