import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

const Header = ({ currentTheme, setTheme }) => {
  const links = [
    {
      id: "1",
      name: "Inicio",
      route: "/",
      status: "available",
    },
    {
      id: "2",
      name: "Nosotros",
      route: "/about",
      status: "available",
    },
    {
      id: "3",
      name: "Blog",
      route: "/blog",
      status: "available",
    },
    {
      id: "4",
      name: "Tienda",
      route: "/shop",
      status: "available",
    },
  ];
  const ruta = useRouter();

  return (
    <header className="front-page dark:front-page relative mb-16">
      <div className="absolute left-0 right-0 top-24 sm:-top-10 md:top-0 bottom-0 md:bottom-10 w-full z-10 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center container mx-auto">
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
        <nav className="text-white flex items-center gap-2 mt-5 md:mt-0 navegacion">
          {/* recorremos los valores del json con .value */}
          {Object.values(links).map((link) => (
            // <h1 key={link.id}>{link.name}</h1>
            <Link key={link.id} href={link.route}>
              <span
                className={`${ruta.pathname === link.route ? "active" : ""}`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          {currentTheme === "dark" ? (
            <button
              aria-labelledby="light"
              aria-label="light"
              role="button"
              className="btnMode"
              onClick={() => setTheme("light")}
            >
              <RiSunLine className="text-lg sm:text-xl" />
            </button>
          ) : (
            <button
              aria-labelledby="dark"
              aria-label="dark"
              role="button"
              className="btnMode"
              onClick={() => setTheme("dark")}
            >
              <RiMoonLine className="text-lg sm:text-xl" />
            </button>
          )}
          {/* <Link href="/">
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
          </Link> */}
        </nav>
      </div>
      <svg
        className="absolute bottom-0 left-0 right-0 w-full "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1350 300" //320
      >
        <path
          fill={currentTheme === "dark" ? "#0F0F0F" : "#f6f9ff"}
          fill-opacity="1"
          d="M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,250.7C672,235,768,213,864,208C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </header>
  );
};

export default Header;
