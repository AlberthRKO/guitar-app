import Image from "next/image";
import logo from "../public/img/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <Image src={logo.src} alt="Guitar-logo" width={200} height={40} />
      </div>
    </header>
  );
};

export default Header;
