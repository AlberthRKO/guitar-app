import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de música, venta de guitarras y más!"}
      >
        <div className="container text-center py-5 z-10 -mt-10">
          <h1 className="text-3xl font-bold">Hello world from next</h1>
        </div>
      </Layout>
    </>
  );
}
