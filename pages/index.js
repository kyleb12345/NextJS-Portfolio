import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../componets/home-page/featured-posts';
import Hero from '../componets/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';



export default function HomePage(props) {
  return (
    <div>
        <Fragment>
          <Head>
            <title>Kyle's Web Dev Blog</title>
            <meta name='description' content='This is my web dev blog for my portfolio.' />
          </Head>
        <Hero />
        <FeaturedPosts posts={props.posts} />
        </Fragment>
    </div>
  )
}

export function getStaticProps () {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}