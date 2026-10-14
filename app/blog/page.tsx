import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Container from "@/components/system/Container";
import PostDate from "@/components/date";
import { formatIndex } from "@/lib/format";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on web development, digital marketing and the work behind it, from the Zelisline studio.",
};

interface PostImageSize {
  sourceUrl: string;
  width: number;
  height: number;
}

interface Post {
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: {
    node: {
      mediaDetails: {
        file: string;
        sizes: PostImageSize[];
      };
    };
  };
}

const POSTS_QUERY = `
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
    }
  }
`;

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ query: POSTS_QUERY }),
      next: { revalidate: 0 },
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    if (!data?.data?.posts?.nodes) {
      console.error("Unexpected response structure:", data);
      return [];
    }
    return data.data.posts.nodes;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

function PostThumbnail({ post }: { post: Post }) {
  const size = post.featuredImage?.node.mediaDetails.sizes?.[0];
  if (!size) return <div className="grayscale-plate aspect-[4/3] w-full bg-grey-100" aria-hidden />;

  return (
    <div className="grayscale-plate aspect-[4/3] w-full overflow-hidden border border-ink bg-grey-100">
      <Image src={size.sourceUrl} alt={post.title} width={size.width} height={size.height} className="h-full w-full object-cover" />
    </div>
  );
}

function PostRow({ post, position }: { post: Post; position: number }) {
  return (
    <li className="group grid gap-6 border-b border-ink py-8 md:grid-cols-12 md:items-start md:gap-8">
      <div className="md:col-span-3">
        <span className="font-mono text-[12px] text-ink-muted">{formatIndex(position + 1)}</span>
        <PostThumbnail post={post} />
      </div>
      <div className="md:col-span-9">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
          Published <PostDate dateString={post.date} />
        </p>
        <h2 className="mt-3">
          <Link
            href={`/post/${post.slug}`}
            className="display-wide font-display text-2xl font-bold leading-tight underline-offset-8 hover:underline sm:text-3xl"
          >
            {post.title}
          </Link>
        </h2>
        <div
          className="mt-4 max-w-2xl text-pretty leading-relaxed text-ink-muted"
          dangerouslySetInnerHTML={{ __html: `${post.excerpt}…` }}
        />
        <Link href={`/post/${post.slug}`} className="mt-5 inline-flex border-b-2 border-ink pb-1 text-sm font-medium">
          Read article
        </Link>
      </div>
    </li>
  );
}

function EmptyState() {
  return (
    <div className="border border-ink p-10 text-center">
      <h2 className="display-wide font-display text-2xl font-bold">No posts available</h2>
      <p className="mt-3 text-ink-muted">Check back later for new content!</p>
    </div>
  );
}

export default async function JournalPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes from the studio"
        description="Writing on web development, digital marketing and the work behind it."
        facts={[{ label: "Entries", value: formatIndex(posts.length) }]}
      />
      <Container className="py-16 sm:py-20">
        {posts.length === 0 ? (
          <EmptyState />
        ) : (
          <ol className="border-t-2 border-ink">
            {posts.map((post, index) => (
              <PostRow key={post.slug} post={post} position={index} />
            ))}
          </ol>
        )}
      </Container>
    </>
  );
}
