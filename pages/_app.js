import "../styles/globals.css";
import Layout from "../components/Layout";
// import { Provider } from "react-redux";
// import store from "../app/store";

import { TransactionProvider } from "../context/TransactionContext"


function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </TransactionProvider>
  );
}

export default MyApp;
