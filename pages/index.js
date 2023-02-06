import Link from "next/link";
import CardGuitar from "../components/card-guitar";
import CardPost from "../components/card-post";
import Layout from "../components/Layout";
import { RiArrowRightCircleLine } from "react-icons/ri";
import NewCurso from "../components/new-curso";

export default function Home({ guitars, posts, curso }) {
  // console.log(curso);
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de música, venta de guitarras y más!"}
      >
        <main className="text-center py-5 z-10 -mt-10 lg:-mt-16">
          <div className="container pb-8 flex flex-col">
            <h1 className="text-heading pb-5">Nuestras guitarras</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {guitars.map((guitar, idx) => {
                if (idx < 3) {
                  return (
                    <CardGuitar key={guitar.id} guitar={guitar.attributes} />
                  );
                }
              })}
            </div>
            <Link
              href="/shop"
              className="transition-all flex items-center mx-auto group rounded-lg ease-in-out py-1 lg:py-2 px-3 lg:px-4 border-[1px] border-[#404974] dark:border-[#e99401] text-[#404974] dark:text-[#e99401] hover:bg-[#404974] dark:hover:bg-[#e99401] hover:text-white dark:hover:text-white text-sm lg:text-base"
            >
              Explorar Guitarras
              <RiArrowRightCircleLine className="text-xl ml-1 group-hover:rotate-[360deg] transition-all duration-700 group-hover:ml-3" />
            </Link>
          </div>
          {/* Seccion de Curso */}
          <NewCurso curso={curso.attributes} />
          <div className="container pb-8 flex flex-col">
            <h1 className="text-heading pb-5">Explora nuestros blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, idx) => {
                if (idx < 3)
                  return <CardPost key={post.id} post={post.attributes} />;
              })}
            </div>
            <Link
              href="/blog"
              className="transition-all flex items-center mx-auto group rounded-lg ease-in-out py-1 lg:py-2 px-3 lg:px-4 border-[1px] border-[#404974] dark:border-[#e99401] text-[#404974] dark:text-[#e99401] hover:bg-[#404974] dark:hover:bg-[#e99401] hover:text-white dark:hover:text-white text-sm lg:text-base"
            >
              Explorar Blog
              <RiArrowRightCircleLine className="text-xl ml-1 group-hover:rotate-[360deg] transition-all duration-700 group-hover:ml-3" />
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const urlGuitars = `${process.env.API_URL}/guitarras?populate=img`;
  const urlPosts = `${process.env.API_URL}/posts?populate=img`;
  const urlCurso = `${process.env.API_URL}/curso?populate=img`;

  const [resGuitars, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCurso),
  ]);
  const [{ data: guitars }, { data: posts }, { data: curso }] =
    await Promise.all([resGuitars.json(), resPosts.json(), resCurso.json()]);

  // console.log(guitars);
  // console.log(posts);
  console.log(curso);
  return {
    props: { guitars, posts, curso },
  };
}
