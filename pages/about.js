import Link from "next/link";
import Layout from "../components/Layout";

const About = () => {
  return (
    <>
      <Layout
        title={"About Us"}
        description={
          "Conoce más sobre nosotros para saber todo lo que podemos ofrecerte."
        }
      >
        <h1 className="font-bold">About</h1>
        <Link href="/">Inicio</Link>
      </Layout>
    </>
  );
};

export default About;
