import React from "react";

const NewCurso = ({ curso }) => {
  const { name, description, img } = curso;
  return (
    <section
      className="py-10 h-[25rem] sm:h-[30rem] lg:h-[30rem] mb-8 relative"
      style={{
        background: `url('${img.data.attributes.url}') center center / cover`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container h-full relative grid grid-cols-2 items-center z-10">
        <div className="col-span-2 text-center lg:col-start-2 lg:text-start">
          <h1 className="text-3xl sm:text-4xl text-white dark:text-[#e99401] font-bold mb-4">
            {name}
          </h1>
          <p className="text-base sm:text-lg text-white">{description}</p>
        </div>
      </div>
      <div className="absolute capa-curso dark:capa-curso top-0 left-0 right-0 bottom-0 w-full "></div>
    </section>
  );
};

export default NewCurso;
