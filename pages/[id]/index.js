import { Fragment } from "react";
import Header from "../../components/Header";
import {
   MDBCard,
   MDBCardBody,
   MDBCardTitle,
   MDBCardText,
   MDBBtn,
} from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import { deleteHero, getHeroById } from "../../actions/HeroActions";

const ViewHero = ({ hero }) => {
   const router = useRouter();
   const heroId = router.query.id;

   const _deleteHero = async () => {
      if (heroId) {
         const deletedHero = await deleteHero(heroId);
         router.push("/");
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
                     <MDBBtn color="danger" size="sm" onClick={_deleteHero}>
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
}

export default ViewHero;
