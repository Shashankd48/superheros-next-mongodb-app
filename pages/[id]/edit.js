import Header from "../../components/Header";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import Router from "next/router";
import { Fragment, useState } from "react";
import config from "../../config";

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
      try {
         const res = await axios.put(`${config.baseURL}/hero/${hero._id}`, {
            ...heroData,
         });

         if (res.status == 200) Router.push("/");
      } catch (error) {
         console.log("Error: ", error.response.data);
      }
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
                  />
                  <MDBInput
                     onChange={handleChange}
                     label="Real Name"
                     type="text"
                     name="realName"
                     value={heroData.realName}
                     className="mb-4"
                  />

                  <MDBBtn type="submit">Update Hero</MDBBtn>
               </form>
            </div>
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

export default EditHero;
