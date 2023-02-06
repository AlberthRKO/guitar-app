import CardPost from "../components/card-post";
import Layout from "../components/Layout";

const Blog = ({ posts }) => {
  return (
    <>
      <Layout title={"Blog"} description={"Blog de musica, consejos y más!"}>
        <main className="container py-5 z-10 -mt-10 lg:-mt-16">
          <h1 className="text-heading pb-5">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <CardPost key={post.id} post={post.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Blog;

export async function getServerSideProps() {
  const resp = await fetch(`${process.env.API_URL}/posts?populate=img`);
  const { data: posts } = await resp.json();
  // console.log(posts);
  return {
    props: { posts },
  };
}
