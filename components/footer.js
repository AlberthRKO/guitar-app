import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-2">
      <div className="contenedor flex flex-col items-center sm:flex-row sm:justify-between mx-auto md:w-10/12 xl:w-8/12">
        <p className="text-3xl font-semibold text-white order-2 sm:order-1">
          Todos los derechos reservados{" "}
          <span className="text-yellow-600">{new Date().getFullYear()}</span>
        </p>
        <nav className="text-white flex gap-2 mb-4 sm:mb-0 navegacion2 order-1 sm:order-2">
          <Link href="/">Inicio</Link>
          <Link href="/about">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/shop">Tienda</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
