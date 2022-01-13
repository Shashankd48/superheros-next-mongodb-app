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
import Link from "next/link";
import { Fragment } from "react";
import { getHeros } from "../actions/HeroActions";

function Home({ heros = [] }) {
   const NotFound = () => {
      return (
         <div className="mt-5">
            <h4 className="text-center mt-5">No Heros Added Yet!</h4>
         </div>
      );
   };

   return (
      <Fragment>
         <Header title="Superheroes Identity" />
         <div className="container m-auto">
            <h3 className="text-center mt-4">Superhero Identity Manager</h3>
            <div>
               <MDBRow>
                  {heros.length > 0 ? (
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
                     ))
                  ) : (
                     <NotFound />
                  )}
               </MDBRow>
            </div>
         </div>
      </Fragment>
   );
}

export async function getServerSideProps(context) {
   const data = await getHeros();
   const heros = data && !data.error ? data.heros : [];

   return {
      props: { heros },
   };
}

export default Home;
