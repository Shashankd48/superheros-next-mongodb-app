import Header from "../components/Header";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { Fragment, useState } from "react";
import config from "../config";

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
      try {
         const res = await axios.post(`${config.baseURL}/hero`, {
            ...heroData,
         });

         if (res.status == 200) Router.push("/");
      } catch (error) {
         console.log("Error: ", error.response.data);
      }
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
