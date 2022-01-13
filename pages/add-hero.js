import Header from "../components/Header";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Router from "next/router";
import { Fragment, useState } from "react";
import { addHero } from "../actions/HeroActions";

const AddHero = () => {
   const [heroData, setHeroData] = useState({
      superHero: "",
      realName: "",
   });

   const handleChange = (event) => {
      setHeroData({ ...heroData, [event.target.name]: event.target.value });
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      const data = await addHero(heroData.superHero, heroData.realName);
      if (!data.error) Router.push("/");
   };

   return (
      <Fragment>
         <Header title="Add New Hero" />
         <div className="container">
            <div className="mt-4 w-50 m-auto mt-5">
               <h4>Add hero</h4>
               <form onSubmit={handleSubmit}>
                  <MDBInput
                     onChange={handleChange}
                     label="Superhero"
                     type="text"
                     name="superHero"
                     value={heroData.superHero}
                     className="mb-3"
                  />
                  <MDBInput
                     onChange={handleChange}
                     label="Real Name"
                     type="text"
                     name="realName"
                     value={heroData.realName}
                     className="mb-3"
                  />

                  <MDBBtn type="submit">Add New Hero</MDBBtn>
               </form>
            </div>
         </div>
      </Fragment>
   );
};

export default AddHero;
