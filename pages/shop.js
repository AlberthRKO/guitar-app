import Layout from "../components/Layout";
import CardGuitar from "../components/card-guitar";

export default function Shop({ guitars }) {
  // console.log(guitars);
  return (
    <>
      <Layout title={"Tienda"} description={"Tienda de musica, ventas y más!"}>
        <main className="container py-5 z-10 -mt-10 lg:-mt-16">
          <h1 className="text-heading pb-5">Tienda de Guitarras</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {guitars.map((guitar) => (
              <CardGuitar key={guitar.id} guitar={guitar.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

// consultamos api con staticProps
/* export async function getStaticProps() {
  const resp = await fetch(`${process.env.API_URL}/guitarras?populate=img`);
  // destructuring para obtener solo el data del json
  const { data: guitars } = await resp.json();
  // console.log(guitars);
  return {
    props: { guitars },
  };
} */
export async function getServerSideProps() {
  const resp = await fetch(`${process.env.API_URL}/guitarras?populate=img`);
  // destructuring para obtener solo el data del json
  const { data: guitars } = await resp.json();
  // console.log(guitars);
  return {
    props: { guitars },
  };
}
