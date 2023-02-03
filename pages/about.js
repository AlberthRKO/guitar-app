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
        <main className="container py-5 z-10 -mt-10">
          <h1 className="text-heading pb-3">About</h1>

          <div className="flex flex-col py-5 lg:flex-row items-center">
            <div className="px-3 w-full lg:w-6/12" data-aos="fade-up">
              <Image
                className="transition-all rounded-3xl shadow-lg hover:shadow-blue-100 dark:hover:shadow-[#e9940125]"
                src="/img/nosotros.jpg"
                width={1000}
                height={800}
                alt="Imagen de Nosotros"
              />
            </div>
            <div
              className="w-full lg:w-6/12 px-2 pt-5 lg:pt-0 "
              data-aos="fade-left"
            >
              <p className="text-base md:text-lg">
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
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default About;
