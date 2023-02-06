import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import { formatDate } from "../../utils/helpers";

const Post = ({ post }) => {
  const { title, content, publishedAt, img } = post[0].attributes;
  return (
    <>
      <Layout title={title} description={content}>
        <main className="container py-5 z-10 -mt-10 lg:-mt-16">
          <h1 className="text-heading mb-10">{title}</h1>
          <div
            className="transition-all duration-500 rounded-md overflow-hidden group relative lg:w-9/12 mx-auto hover:-translate-y-3 mb-5
          hover:shadow-lg hover:shadow-[#40497460] dark:hover:shadow-md dark:hover:shadow-[#e9940128]"
          >
            <div className="post-capa dark:post-capa"></div>
            <Image
              src={img.data.attributes.url}
              alt={title}
              width={900}
              height={500}
              className="transition-all duration-500 w-full h-56 md:h-72 lg:h-96 xl:h-[28rem] object-cover rounded-md group-hover:scale-110 group-hover:rotate-3"
            />
          </div>
          <div className="card-post py-4 px-4 lg:px-7 md:px-5 lg:w-10/12 xl:w-8/12 mx-auto md:flex md:justify-between mb-3">
            <h2 className="font-bold">
              Titulo:
              <span className="text-[#404974] dark:text-[#e99401] pl-2">
                {title}
              </span>
            </h2>
            <p className="font-semibold">
              Publicado:
              <span className="text-[#404974] dark:text-[#e99401] pl-2">
                {formatDate(publishedAt)}
              </span>
            </p>
          </div>
          <div className="card-post py-4 px-4 lg:px-7 md:px-5 lg:w-10/12 xl:w-8/12 mx-auto md:flex md:justify-between">
            {/* <h2>{title}</h2> */}
            <p className="whitespace-pre-wrap">{content}</p>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Post;

export async function getServerSideProps({ params: { url } }) {
  //   console.log(datos);
  // console.log(urlRouter);
  const resp = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=img`
  );
  const { data: post } = await resp.json();
  console.log(post);
  return {
    props: { post },
  };
}
