import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate } from "../utils/helpers";

const CardPost = ({ post }) => {
  const { title, content, publishedAt, url, img } = post;
  return (
    <article className="card-post group mx-3 mb-7">
      <div className="rounded-md overflow-hidden relative">
        <div className="post-capa dark:post-capa"></div>
        <Image
          src={img.data.attributes.url}
          alt={title}
          width={900}
          height={500}
          className="transition-all duration-500 w-full h-52 object-cover rounded-md group-hover:scale-110 group-hover:rotate-3"
        />
      </div>
      <div className="flex flex-col items-center text-center py-3 px-4">
        <h2 className="text-base sm:text-xl text-center font-bold pb-3">
          {title}
        </h2>
        <p className="text-xs font-semibold mb-3 text-[#404974] dark:text-[#e99401]">
          {formatDate(publishedAt)}
        </p>
        <p className="text-sm mb-2 line-clamp-3">{content}</p>
        <Link href={`blog/${url}`} className="btn-primary my-2">
          Leer más
        </Link>
      </div>
    </article>
  );
};

export default CardPost;
