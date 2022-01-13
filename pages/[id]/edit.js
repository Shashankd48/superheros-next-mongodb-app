import Header from "../../components/Header";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Router from "next/router";
import { Fragment, useState } from "react";
import { getHeroById, updateHero } from "../../actions/HeroActions";
import { toast } from "react-toastify";

const EditHero = ({ hero }) => {
   const [heroData, setHeroData] = useState({
      superHero: hero ? hero.superHero : "",
      realName: hero ? hero.realName : "",
   });

   const handleChange = (event) => {
      setHeroData({ ...heroData, [event.target.name]: event.target.value });
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (heroData.superHero === "" || heroData.realName === "")
         return toast.error("Please fill both the fields");

      const data = await updateHero(
         hero._id,
         heroData.superHero,
         heroData.realName
      );

      if (!data || data?.error) {
         toast.error(data?.error ? data.message : "Somthing went wrong");
         return;
      }

      toast.success(`${hero.superHero} updated!`);
      Router.push("/");
   };

   return (
      <Fragment>
         <Header title="Edit Hero" />
         <div className="container">
            <div className="mt-4 w-50 m-auto mt-5">
               <h4 className="text-center mb-4">Edit Hero</h4>
               <form onSubmit={handleSubmit}>
                  <MDBInput
                     onChange={handleChange}
                     label="Superhero"
                     type="text"
                     name="superHero"
                     value={heroData.superHero}
                     className="mb-4"
                     required
                  />
                  <MDBInput
                     onChange={handleChange}
                     label="Real Name"
                     type="text"
                     name="realName"
                     value={heroData.realName}
                     className="mb-4"
                     required
                  />

                  <MDBBtn type="submit">Update Hero</MDBBtn>
               </form>
            </div>
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

export default EditHero;
