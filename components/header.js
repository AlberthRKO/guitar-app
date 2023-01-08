import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const ruta = useRouter();
  return (
    <header className="barra">
      <div className="contenedor flex flex-col items-center sm:flex-row sm:justify-between mx-auto md:w-10/12 xl:w-8/12">
        <Link href="/">
          <span>
            <Image
              src="/img/logo.svg"
              alt="Guitar-logo"
              width={200}
              height={40}
            />
          </span>
        </Link>
        <nav className="text-white flex gap-2 mt-5 md:mt-0 navegacion">
          <Link href="/">
            <span className={ruta.pathname === "/" ? "active" : ""}>
              Inicio
            </span>
          </Link>
          <Link href="/about">
            <span className={ruta.pathname === "/about" ? "active" : ""}>
              Nosotros
            </span>
          </Link>
          <Link href="/blog">
            <span className={ruta.pathname === "/blog" ? "active" : ""}>
              Blog
            </span>
          </Link>
          <Link href="/shop">
            <span className={ruta.pathname === "/shop" ? "active" : ""}>
              Tienda
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
