import Loading from "../../blog/loading";
import Image from "next/image";
import SideNav from "@/components/SideNav";
import Date from "@/components/date";
import Head from "next/head";
import Footer from "@/components/Footer";


async function getSinglePost(slug) {
  const query = `
 query GetSinglePost($slug: String!) {
  postBy(slug: $slug) {
    title(format: RENDERED)
    content(format: RENDERED)
    date
    modified
    featuredImage {
      node {
        mediaDetails {
          sizes {
            sourceUrl
            width
            height
          }
        }
      }
    }
    author {
      node {
        description
        firstName
        lastName
        nickname
      }
    }
  }
}
  `;

  const variables = {
    slug,
  };

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data } = await res.json();

  // Check if the post data is available
  const post = data?.postBy;

  if (post) {
    return post;
  } else {
    throw new Error(`Failed to fetch the post with slug: ${slug}`);
  }
}

export default async function PostDetails({ params }) {
  try {
    // Extracting the slug from params depending on the structure
    const slug = params.slug || params.query.slug;

    if (!slug) {
      throw new Error("Slug not found in params");
    }

    const post = await getSinglePost(slug);
    return (
      <main>
        <div>
          <Head>
            <title>{post.title}</title>
            <meta name="description" content={post.excerpt} key="desc" />
            <meta property="og:title" content={post.title} />
            <meta
              property="og:description"
              content={post.excerpt}
            />
            <meta
              property="og:image"
              content={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
            />
          </Head>
        </div>
        <div className="flex md:max-w-7xl mx-auto">
          <div className="hidden: md:max-w-[1dvw] mx-auto">
            <SideNav />
          </div>
          <div className="post-content max-w-3xl mx-auto md:mt-16 mt-10">
            <nav>
              <h1>{post.title}</h1>  <p className="justify-center mt-10 hover:translate-x-6 text-xs font-light text-white hover:text-slate-200 bg-cyan-500 hover:bg-grey-100 inline px-5 py-2 clip-rabet">
                Modified: <Date dateString={post.modified} />
              </p>

              <div className="flex justify-end">
                <p className="justify-center mt-10 hover:translate-x-6 text-xs font-light text-slate-100 hover:text-slate-200 bg-orange-400 hover:bg-grey-100 inline w-12 h-12 text-center py-2 clip-round shadow-2xl">
                  <Date dateString={post.date} />
                </p>
              </div>
              <div className=" h-40vh max-w-[60vh] bg-cover mb-10 mx-auto">
                {post.featuredImage && (
                  <Image
                    src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                    width="0"
                    height="0"
                    sizes="10vw"
                    style={{ width: '100%', height: 'auto' }}
                    placeholder="empty"
                    loading='lazy'
                    alt={post.title}
                  />
                )}
              </div>
            </nav>
            <div className="card mb-5" key={slug}>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />

            </div>
            {post.author.node.firstName}
            {post.author.node.lastName}
            {post.author.node.description}

          </div>
        </div>
        <Footer />

      </main>

    );
  } catch (error) {
    return <div>Error fetching post. Please check the console for details.</div>;
  }
}