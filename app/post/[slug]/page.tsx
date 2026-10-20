import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/system/Container";
import Eyebrow from "@/components/system/Eyebrow";
import PostDate from "@/components/date";

interface PostImage {
  sourceUrl: string;
  width: number;
  height: number;
}

interface SinglePost {
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  modified: string;
  featuredImage?: { node: { mediaDetails: { sizes: PostImage[] } } };
  author?: { node: { firstName?: string; lastName?: string; description?: string } };
}

interface PostPageProps {
  params: { slug: string };
}

const HTML_TAG_PATTERN = /<[^>]+>/g;

const POST_QUERY = `
  query GetSinglePost($slug: String!) {
    postBy(slug: $slug) {
      title(format: RENDERED)
      content(format: RENDERED)
      excerpt(format: RENDERED)
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

async function getSinglePost(slug: string): Promise<SinglePost | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json, text/plain, */*" },
      body: JSON.stringify({ query: POST_QUERY, variables: { slug } }),
    });
    const { data } = await res.json();
    return data?.postBy ?? null;
  } catch (error) {
    console.error(`Failed to fetch the post with slug: ${slug}`, error);
    return null;
  }
}

const coverImage = (post: SinglePost) => post.featuredImage?.node.mediaDetails.sizes?.[0];

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getSinglePost(params.slug);
  if (!post) return { title: "Article not found" };

  const cover = coverImage(post)?.sourceUrl;
  const description = post.excerpt?.replace(HTML_TAG_PATTERN, "").trim();
  return {
    title: post.title,
    description,
    openGraph: { title: post.title, description, images: cover ? [cover] : undefined },
  };
}

function AuthorBlock({ author }: { author: NonNullable<SinglePost["author"]>["node"] }) {
  const name = [author.firstName, author.lastName].filter(Boolean).join(" ");
  if (!name && !author.description) return null;

  return (
    <aside className="mt-16 grid gap-4 border-t-2 border-ink pt-8 sm:grid-cols-[auto_1fr] sm:gap-8">
      <Eyebrow>Written by</Eyebrow>
      <div>
        {name && <p className="display-wide font-display text-xl font-bold">{name}</p>}
        {author.description && <p className="mt-2 max-w-xl leading-relaxed text-ink-muted">{author.description}</p>}
      </div>
    </aside>
  );
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getSinglePost(params.slug);
  if (!post) notFound();

  const cover = coverImage(post);

  return (
    <article>
      <Container className="max-w-4xl py-14 sm:py-20">
        <Link href="/blog" className="font-mono text-[12px] uppercase tracking-[0.1em] underline underline-offset-4">
          ← Back to journal
        </Link>

        <header className="mt-10 border-b border-ink pb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
            Published <PostDate dateString={post.date} /> · Updated <PostDate dateString={post.modified} />
          </p>
          <h1
            className="display-wide mt-6 font-display text-[2.2rem] font-bold uppercase leading-[0.98] tracking-[-0.03em] sm:text-6xl"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
        </header>

        {cover && (
          <div className="grayscale-plate mt-10 border border-ink bg-grey-50 p-2">
            <Image src={cover.sourceUrl} alt="" width={cover.width} height={cover.height} className="h-auto w-full" />
          </div>
        )}

        <div className="post-content mt-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        {post.author?.node && <AuthorBlock author={post.author.node} />}
      </Container>
    </article>
  );
}
