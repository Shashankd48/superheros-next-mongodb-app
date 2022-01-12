import Navbar from "./Navbar";
import { Fragment } from "react";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
   return (
      <Fragment>
         <Navbar />
         <main className={styles.main}>{children}</main>
         <Footer />
      </Fragment>
   );
};

export default Layout;
