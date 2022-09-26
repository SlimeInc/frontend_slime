import Navbar from "./Navbar";
import styles from './Main.module.scss'
import styling from '../styles/Home.module.scss'
import Footer from "./Footer";
import { Sidebar } from "./Sidebar";
import { useRouter } from "next/router";
import { JustDigi } from "./JustDigi";
export default function Layout({ children }) {
  const router = useRouter();
  const home = '/'
  return (
    <>
      {router.pathname == home && <Navbar />}
      {router.pathname != home && <Sidebar />}
      {router.pathname != home && <JustDigi/>}
      <main className={router.pathname != home? styles.main:styling.LandingPage}>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
