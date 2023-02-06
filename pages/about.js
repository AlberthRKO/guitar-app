import Image from "next/image";
import Layout from "../components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Layout
        title={"About Us"}
        description={
          "Conoce más sobre nosotros para saber todo lo que podemos ofrecerte."
        }
      >
        <main className="container py-5 z-10 -mt-10 lg:-mt-16">
          <h1 className="text-heading pb-3">Sobre Nosotros</h1>

          <div className="flex flex-col py-5 gap-5 lg:flex-row items-center">
            <div
              className="transition-all duration-500 rounded-xl overflow-hidden group relative lg:w-6/12 mx-auto hover:-translate-y-3 mb-5
          hover:shadow-lg hover:shadow-[#40497460] dark:hover:shadow-md dark:hover:shadow-[#e9940128]"
            >
              <div className="post-capa dark:post-capa"></div>
              <Image
                className="transition-all duration-500 w-full  object-cover rounded-xl group-hover:scale-110 group-hover:rotate-3"
                src="/img/nosotros.jpg"
                width={1000}
                height={800}
                alt="Imagen de Nosotros"
              />
            </div>
            <div className="w-full lg:w-6/12 py-5 px-4 lg:px-6 card-post">
              <h2 className=" lg:text-2xl font-bold text-[#404974] dark:text-[#e99401] mb-4">
                GuitarLA Instrumentos - Cursos
              </h2>
              <p className="whitespace-pre-wrap">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, veniam corrupti reiciendis non, blanditiis, est ut
                accusantium voluptate sed quos architecto! Cumque minima quo
                reprehenderit provident nostrum obcaecati, id ad.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat repellendus dolorem provident mollitia quae pariatur,
                minus repudiandae amet corporis doloremque obcaecati nihil iure
                libero debitis unde laboriosam voluptate corrupti! Cupiditate.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat repellendus dolorem provident mollitia quae pariatur,
                minus repudiandae amet corporis doloremque obcaecati nihil iure
                libero debitis unde laboriosam voluptate corrupti! Cupiditate.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat repellendus dolorem provident mollitia quae pariatur,
                minus repudiandae amet corporis doloremque obcaecati nihil iure
                libero debitis unde laboriosam voluptate corrupti! Cupiditate.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat repellendus dolorem provident mollitia quae pariatur,
                minus repudiandae amet corporis doloremque obcaecati nihil iure
                libero debitis unde laboriosam voluptate corrupti! Cupiditate.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default About;
