import { Fragment } from "react";
import Header from "../../components/Header";
import {
   MDBCard,
   MDBCardBody,
   MDBCardTitle,
   MDBCardText,
   MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import config from "../../config";
import { useRouter } from "next/router";
import { getHeroById } from "../../actions/HeroActions";

const ViewHero = ({ hero }) => {
   const router = useRouter();
   const heroId = router.query.id;

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
                     <MDBBtn color="danger" size="sm" onClick={deleteHero}>
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
   const data = await getHeroById(context.params.id);
   const hero = data && !data.error ? data.hero : null;

   return {
      props: { hero },
   };

   // try {
   //    const res = await axios(`${config.baseURL}/hero/${context.params.id}`);
   //    return {
   //       props: { hero: res.data.hero },
   //    };
   // } catch (error) {
   //    return {
   //       props: { hero: null },
   //    };
   // }
}

export default ViewHero;
