import Link from "next/link";
import Image from "next/image";



interface Post {
  featuredImage?: {
    node: {
      mediaDetails: {
        sizes: {
          sourceUrl: string;
          width: number;
          height: number;
        }[];
      };
    };
  };
  slug: string;
  title: string;
}
interface ImageProps {
  src: string;
  width: number | string;
  height: number | string;
  alt: string;
  className?: string;
}


interface FeaturedImageProps {
  post: Post;
}

export default function FeaturedImage({ post }: FeaturedImageProps): JSX.Element {
  let img: {
    src: string;
    width: string | number;
    height: string | number;
  } = {
    src: "",
    width: "",
    height: "",
  };
  
  const defaultFeaturedImage: string = "bg.jpg";
  const defaultWidth: string = "300";
  const defaultHeight: string = "200";
  
  if (post.featuredImage) {
    let size = post.featuredImage.node.mediaDetails.sizes[0];
    img = {
      src: size.sourceUrl,
      width: size.width,
      height: size.height,
    };
  } else {
    img = {
      src: defaultFeaturedImage,
      width: defaultWidth,
      height: defaultHeight,
    };
  }
  
  return (
    <Link href={`/blog/${post.slug}`}>
    <Image
    src={img.src}
    width={parseInt(img.width as string)}
    height={parseInt(img.height as string)}
    alt={post.title}
    className="h-full object-cover rounded-xl"
    />
    </Link>
    );
  }
  