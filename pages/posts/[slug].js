import { getAllPostsId, blogPostDataById } from "../../lib/posts";

const Post = ({ data }) => {
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.date}</p>
    </div>
  );
};

export default Post;

// get all possible id/slugs
export async function getStaticPaths() {
  const paths = getAllPostsId();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = blogPostDataById(params.slug);
  return {
    props: {
      data,
    },
  };
}
