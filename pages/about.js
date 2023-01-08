import Image from "next/image";
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
        <main className="w-full sm:w-10/12 xl:w-8/12">
          <h2 className="heading">Nosotros</h2>
          <div className="px-4 flex gap-10 items-center">
            <Image
              className="w-6/12 rounded-3xl"
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="Imagen de Nosotros"
            />
            <div className="w-6/12">
              <p className="text-2xl md:text-3xl font-normal mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam optio maxime magnam sit, adipisci laboriosam praesentium
                corporis quod ea animi dolores illum, aliquam nemo voluptatibus,
                consectetur similique fuga commodi at! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Sint, iure, ad necessitatibus
                eveniet architecto reiciendis labore ipsam esse odit quisquam,
                similique?
              </p>
              <p className="text-2xl md:text-3xl font-normal mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam optio maxime magnam sit, adipisci laboriosam praesentiu
                amet consectetur adipisicing elit. Sint, iure, ad necessitatibus
                eveniet architecto reiciendis labore ipsam esse odit quisquam,
                aliquam ex amet dicta non impedit fugiat mollitia facere
                similique?
              </p>
              <p className="text-2xl md:text-3xl font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam optio maxime magnam sit, adipisci laboriosam praesentium
                corporis quod ea animi dolores illum, aliquam nemo voluptatibus,
                consectetur similique fuga commodi at! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Sint, iure, ad necessitatibus
                eveniet architecto.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default About;
