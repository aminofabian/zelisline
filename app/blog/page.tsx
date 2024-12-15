import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import Image from "next/image";
import SideNav from "@/components/SideNav";
import Date from '@/components/date';
import Head from "next/head";

interface Post {
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: {
    node: {
      mediaDetails: {
        file: string;
        sizes: {
          sourceUrl: string;
          width: number;
          height: number;
        }[];
      };
    };
  };
}

async function getPosts(): Promise<Post[]> {
  const query = `
  query NewQuery {
    posts {
      nodes {
        date
        slug
        title
        excerpt
        featuredImage {
          node {
            mediaDetails {
              file
              sizes {
                sourceUrl
                width
                height
              }
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
    categories {
      nodes {
        slug
        name
      }
    }
  }
  `;
  
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ query }),
        next: {
          revalidate: 0,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const text = await res.text(); // Get the response as text first
    let data;
    
    try {
      data = JSON.parse(text); // Try to parse the JSON
    } catch (e) {
      console.error('Failed to parse JSON response:', text.slice(0, 200)); // Log the first 200 chars of the response
      throw new Error('Invalid JSON response from API');
    }

    if (!data || !data.data || !data.data.posts || !data.data.posts.nodes) {
      console.error('Unexpected response structure:', data);
      return []; // Return empty array instead of throwing
    }

    return data.data.posts.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return empty array on error
  }
}

export default async function PostList(): Promise<JSX.Element> {
  const posts = await getPosts();
  
  return (
    <>
    <Head>
    <title>Zelisline Blog List</title>
    <link rel="canonical" href="/blog" />
    <meta name="robots" content="noindex,nofollow" />
    </Head>
    <div className="flex h-screen relative md:flex-row md:overflow-hidden xl:px-40 md:px-5 bg-transparent mx-auto">
      <div className="hidden: lg:w-30 md:border-r border-slate-200 justify-center align-middle">
        <SideNav />
      </div>
      <div className="container flex-grow mt-12 md:mt-10 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto border-red-200">
        <Suspense fallback={<Loading />}>
          {posts.length === 0 ? (
            <div className="text-center py-10">
              <h2 className="text-2xl font-semibold text-gray-600">No posts available</h2>
              <p className="text-gray-500 mt-2">Check back later for new content!</p>
            </div>
          ) : (
            posts.map((post) => (
              <ul key={post.slug} className="card mt-10 flex border-red-200 custom-clip">
              {/* Adjusted the top margin of each card */}
              <div className="w-[20vw] min-w-[20vw] h-auto min-h-[15vh] max-h-[20dvh]">
              {post.featuredImage && post.featuredImage.node.mediaDetails.sizes && post.featuredImage.node.mediaDetails.sizes[0] ? (
                <Image 
                priority={true}
                src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                width={post.featuredImage.node.mediaDetails.sizes[0].width}
                height={post.featuredImage.node.mediaDetails.sizes[0].height}
                alt={post.title}  
                />
              ) : (
                <Image 
                src="/project-team.svg"
                width="0"
                height="0"
                sizes="15vw"
                style={{ width: '100%', height: 'auto' }}
                placeholder="empty"
                loading = 'lazy'
                alt={post.title}  
                />
              )}
              </div>
              <div className="bg-slate-100 p-4">
              <Link href={`/post/${post.slug}`}>
              <h3 className="text-2xl font-bold text-center mb-5 px-20">{post.title}</h3>             </Link>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt + "..." }} className="w-3xl inline-block px-10" />
              <p className="justify-center mt-10 hover:translate-x-6 text-xs font-light text-slate-400 hover:text-slate-500 bg-slate-200 hover:bg-grey-100 inline px-5 py-2 clip-rabet">
              Date Published: <Date dateString={post.date} />
              </p>
              </div>
              </ul>
            ))
          )}
        </Suspense>
      </div>
    </div>
    </>
  );
}
