import Navbar from "./Navbar";
import styles from './Main.module.scss'
import Footer from "./Footer";
import { Sidebar } from "./Sidebar";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const router = useRouter();
  const home = '/'
  return (
    <>
      {router.pathname == home && <Navbar />}
      {router.pathname != home && <Sidebar />}
      <main className={router.pathname != home && styles.main}>{children}</main>
      <Footer />
    </>
  );
}
