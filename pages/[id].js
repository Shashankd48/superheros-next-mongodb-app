import { Fragment } from "react";
import Header from "../components/Header";
import {
   MDBCard,
   MDBCardBody,
   MDBCardTitle,
   MDBCardText,
   MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import Link from "next/link";
import config from "../config";
import { useRouter } from "next/router";

const ViewHero = ({ hero }) => {
   const router = useRouter();
   const heroId = router.query.id;

   console.log(heroId);

   const deleteHero = async () => {
      if (heroId) {
         try {
            await axios.delete(`${config.baseURL}/hero/${heroId}`);
            router.push("/");
         } catch (error) {}
      }
   };

   return (
      <Fragment>
         <Header title="Superheros Identity" />
         <div className="container">
            <h4 className="text-center mt-4">Identity of Hero</h4>
            {hero && (
               <MDBCard
                  style={{ maxWidth: "22rem" }}
                  className="border border-1 m-auto mt-4"
               >
                  <MDBCardBody>
                     <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                     <MDBCardText>{hero.realName}</MDBCardText>
                     <MDBBtn color="warning">Edit</MDBBtn>
                     <MDBBtn
                        color="danger"
                        className="mx-3"
                        onClick={deleteHero}
                     >
                        Delete
                     </MDBBtn>
                  </MDBCardBody>
               </MDBCard>
            )}
         </div>
      </Fragment>
   );
};

export async function getServerSideProps(context) {
   try {
      const res = await axios(`${config.baseURL}/hero/${context.params.id}`);
      return {
         props: { hero: res.data.hero },
      };
   } catch (error) {
      return {
         props: { hero: null },
      };
   }
}

export default ViewHero;
