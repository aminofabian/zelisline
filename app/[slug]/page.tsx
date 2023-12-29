 import React from 'react';
 import Footer from '@/components/Footer';
 import ContactPage from '@/components/ContactPage';
 import Head from 'next/head';
 import SideNav from '@/components/SideNav';
 
 async function getPageDSlug(slug: any) {
  const query = `
  query GetPageSlug {
    pages {
      nodes {
        slug
      }
    }
  }
  `;
  
  const variables = {
    slug,
  };
  
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
  
  if (!endpoint) {
    throw new Error('GraphQL endpoint is not defined.');
  }
  
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  
  const { data } = await res.json();
  
  console.log('GraphQL Response:', data);
  
  // Check if the post data is available
  const post = data?.postBy;
  
  if (post) {
    return post;
  } else {
    throw new Error(`Failed to fetch the post with slug: ${slug}`);
  }
}




function PageSlug() {
  return (
    <>
    <Head>
    <title>Page Slug</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex h-screen relative md:flex-row md:overflow-hidden xl:px-40 md:px-10 bg-transparent">
    <div className="hidden md:flex"><SideNav /></div>
    <div> 
    { }
    </div>
    <div className="flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto animate-bounce-custom">
    <div className="m-12 rounded-xl">
    <ContactPage />
    </div>
    <Footer />
    </div>
    </div>
    
    
    
    </>
    )
  }
  
  export default PageSlug;