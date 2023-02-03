import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
{
  /* layout de los metas para cada pagina que se vera.. aplicando seo */
}
const Layout = ({ children, title = "", description = "" }) => {
  // Dark / Light
  // Seccion de darkmode
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // arreglando el problema del doble renderizado
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{`Guitar App - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header currentTheme={currentTheme} setTheme={setTheme} />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
