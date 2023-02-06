import Image from "next/image";
import Link from "next/link";

const CardGuitar = ({ guitar }) => {
  const { name, img, description, price, url } = guitar;
  return (
    <div className="card-content group flex items-center mx-3">
      <div className="flex items-center">
        <Image
          src={img.data.attributes.url}
          alt={`Imagen Guitarra ${name}`}
          width={500}
          height={300}
          className="transition-all w-28 group-hover:-mt-20 group-hover:rotate-[20deg] group-hover:scale-110 group-hover:duration-500"
        />
        <div className="text-start">
          <h2 className="text-xl font-bold mb-3">{name}</h2>
          <p className="text-sm mb-2">{description}</p>
          <p className="font-bold mb-2 text-[#404974] dark:text-[#e99401]">
            {price} $
          </p>
          <Link href={`guitar/${url}`} className="btn-primary">
            Ver Producto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardGuitar;
