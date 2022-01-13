import "../styles/globals.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Layout from "../components/Layout";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
   Router.events.on("routeChangeStart", () => NProgress.start());
   Router.events.on("routeChangeComplete", () => NProgress.done());
   Router.events.on("routeChangeError", () => NProgress.done());

   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
}

export default MyApp;
