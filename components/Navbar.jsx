import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="container">
            <Link href="/">
               <a className="navbar-brand">Supehero Identity</a>
            </Link>

            <Link href="/add-hero">
               <MDBBtn>New Identity</MDBBtn>
            </Link>
         </div>
      </nav>
   );
};

export default Navbar;
