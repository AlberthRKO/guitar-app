import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";

const Guitar = ({ guitar }) => {
  const { name, description, price, img } = guitar[0].attributes;
  return (
    <>
      <Layout title={`Guitarra ${name}`} description={description}>
        <main className="container py-5 z-10 -mt-10 lg:-mt-16">
          <h1 className="text-heading pb-5">Guitarra {name}</h1>
          <div className="card-content group flex flex-col md:flex-row md:items-center md:mx-auto md:w-10/12 lg:w-8/12">
            <div className="flex justify-center md:w-56 lg:w-6/12">
              <Image
                src={img.data.attributes.url}
                alt={`Imagen Guitarra ${name}`}
                width={500}
                height={300}
                className="transition-all w-32 sm:w-48 -mt-24 sm:-mt-32 md:mt-0 lg:-mt-16 xl:-mt-28 rotate-90 md:rotate-0 group-hover:scale-105 group-hover:rotate-[88deg] md:group-hover:rotate-12 group-hover:duration-500"
              />
            </div>
            <div className="-mt-20 sm:-mt-28 md:mt-0 px-3 pb-5 md:pb-0">
              <div className="text-center md:text-start">
                <h2 className="text-xl lg:text-3xl font-bold mb-3">{name}</h2>
                <p className="text-sm lg:text-base mb-2">{description}</p>
                <p className="font-bold mb-2 text-[#404974] lg:text-xl dark:text-[#e99401]">
                  {price} $
                </p>
                <button className="transition-all rounded-lg ease-in-out py-1 lg:py-2 px-3 lg:px-4 border-[1px] border-[#404974] dark:border-[#e99401] text-[#404974] dark:text-[#e99401] hover:bg-[#404974] dark:hover:bg-[#e99401] hover:text-white dark:hover:text-white text-sm lg:text-base">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Guitar;

/* // Metodo con staticProps necesitamos dos exports uno de los paths para obtener los links y otro de staticProps para leer esos urls

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await res.json();
  // console.log(data);
  // obtenemos la url de todas las iteraciones del data si o si debe devover el objeto params
  const paths = data.map((guitar) => ({
    params: {
      url: guitar.attributes.url,
    },
  }));
  // nos da un arreglo de objetos que accederemos con el staticProps
  // console.log(paths);
  return {
    // los paths se pasan en automatico a gestStaticProps
    paths,
    // en caso de que se agregue un link que no exista devolvera un 404 error
    // en true devolvera un error de codigo
    fallback: false,
  };
}
export async function getStaticProps({ params: { url } }) {
  const res = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=img`
  );
  const { data: guitar } = await res.json();
  // console.log(guitar);
  return {
    props: { guitar },
  };
} */

// Metodo con serverSideProps
export async function getServerSideProps({ params: { url } }) {
  // en datos se muestra todo lo que trae el routing dinamico y buscamos una donde este el uid de nuestro producto
  //   usaremos destructuring para acceder
  //en query->url or params->url se encuentra el uid que necesitamos
  // console.log(datos);
  //   console.log(url);
  const urlRouter = url;
  const resp = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${urlRouter}&populate=img`
  );
  const { data: guitar } = await resp.json();
  console.log(guitar);
  return {
    props: { guitar },
  };
}
