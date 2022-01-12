import Head from "next/head";
const Header = ({ title }) => {
   return (
      <Head>
         <title>{title}</title>
         <meta
            name="description"
            content="Superheros Identity adding platform."
         />
         <link rel="icon" href="/favicon.ico" />
      </Head>
   );
};

export default Header;
