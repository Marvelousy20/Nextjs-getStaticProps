import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostData } from "../lib/posts";
import Link from "next/link";

export default function Home({ blogPosts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Here is me learning pre rendering and data fetching</p>
        <p>
          (This is a sample website - you’ll be building a site like this in
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <div>
          {blogPosts.map(({ title, slug, date }) => (
            // <Link key={slug} href={`/posts/${slug}`}>
            <div>
              <h5>{title}</h5>
              <small>{date}</small>
            </div>
            // </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const blogPosts = getSortedPostData();

  return {
    props: {
      blogPosts,
    },
  };
}
