import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Here is me learning pre rendering and data fetching</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <div>
          {allPostsData.map((post) => {
            return <div key={post.id}>{post.title}</div>;
          })}
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const allPostsData = getSortedPostData();

  return {
    props: {
      allPostsData,
    },
  };
}
