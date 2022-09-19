import Link from "next/link";
import styles from './Navbar'
const NavbarItem = ({ href, children }) => {
  return (
    <li className={styles.navbar__item} >
      <Link href={href}>
        <a> {children}</a>
      </Link>
    </li>
  );
};

export default NavbarItem;
