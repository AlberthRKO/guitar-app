import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
{
  /* layout de los metas para cada pagina que se vera.. aplicando seo */
}
const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>{`Guitar App - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
