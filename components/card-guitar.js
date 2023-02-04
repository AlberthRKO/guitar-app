import Image from "next/image";

const CardGuitar = ({ guitar }) => {
  const { name, img, description, price, url } = guitar;
  return (
    <div className="mx-3 group transition-all ease-in-out border-[1px] border-blue-100 dark:border-gray-800 py-5 px-2 rounded-md bg-white dark:bg-[#212134] mb-7 hover:border-transparent dark:hover:border-transparent hover:shadow-md hover:shadow-blue-100 dark:hover:shadow-md dark:hover:shadow-gray-800 flex items-center">
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
          <p className="font-bold mb-2">{price} $</p>
          <button className="transition-all rounded-lg ease-in-out py-1 px-3 border-[1px] border-[#404974] dark:border-[#e99401] text-[#404974] dark:text-[#e99401] hover:bg-[#404974] dark:hover:bg-[#e99401] hover:text-white dark:hover:text-white text-sm">
            Ver Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardGuitar;
