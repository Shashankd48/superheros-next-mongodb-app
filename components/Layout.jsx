import Navbar from "./Navbar";
import { Fragment } from "react";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
   return (
      <Fragment>
         <Navbar />
         <main className={styles.main}>
            {children}{" "}
            <ToastContainer autoClose={3000} hideProgressBar={true} />
         </main>
         <Footer />
      </Fragment>
   );
};

export default Layout;
