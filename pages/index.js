import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de música, venta de guitarras y más!"}
      >
        <h1 className="text-3xl font-bold">Hello world from next</h1>
        <Link href="/about">About</Link>
      </Layout>
    </>
  );
}
