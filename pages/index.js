import Header from "../components/Header";
import {
   MDBCard,
   MDBCardBody,
   MDBCardTitle,
   MDBCardText,
   MDBBtn,
   MDBRow,
   MDBCol,
} from "mdb-react-ui-kit";
import axios from "axios";
import Link from "next/link";
import { Fragment } from "react";

function Home({ heros = [] }) {
   return (
      <Fragment>
         <Header title="Superheros Identity" />
         <div className="container m-auto">
            <h3 className="text-center mt-4">Superhero Identity Manager</h3>
            <div>
               <MDBRow>
                  {heros.length > 0 &&
                     heros.map((hero) => (
                        <MDBCol key={hero._id} lg={4} md={6} sm={12}>
                           <MDBCard
                              style={{ maxWidth: "22rem" }}
                              className="border border-1 m-auto mt-4"
                           >
                              <MDBCardBody>
                                 <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                                 <MDBCardText>Reveal Identity</MDBCardText>
                                 <Link href={`${hero._id}`}>
                                    <MDBBtn>View Hero</MDBBtn>
                                 </Link>
                                 <Link href={`${hero._id}/edit`}>
                                    <MDBBtn
                                       color="warning"
                                       size="small"
                                       className="mx-3"
                                    >
                                       Edit Hero
                                    </MDBBtn>
                                 </Link>
                              </MDBCardBody>
                           </MDBCard>
                        </MDBCol>
                     ))}
               </MDBRow>
            </div>
         </div>
      </Fragment>
   );
}

// Old way of doing SSR in Nextjs
// Home.getInitialProps = async () => {
//    const res = await axios("http://localhost:3000/api/hero");
//    console.log(res.data);
//    return {};
// };

export async function getServerSideProps(context) {
   const res = await axios("http://localhost:3000/api/hero");
   return {
      props: { heros: res.data.heros },
   };
}

export default Home;
