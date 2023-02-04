import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-2 bg-white dark:bg-[#212134] border-t-[1px] dark:border-gray-800">
      <div className="container flex flex-col items-center md:flex-row sm:justify-between mx-auto">
        <p className="text-xl font-semibold order-2 md:order-1">
          Todos los derechos reservados{" "}
          <span className="text-yellow-600">{new Date().getFullYear()}</span>
        </p>
        <nav className="text-[#4a5568] dark:text-white flex gap-2 mb-1 md:mb-0 navegacion2 order-1 md:order-2">
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
