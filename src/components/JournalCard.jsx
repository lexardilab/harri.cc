import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";

export default function BlogCard({ post }) {
  return (
    <Link href={`/journal/${post.slug.current}`} className="">
      <div className="">
        <h1 className="pb-2">{post.title}</h1>
        

      </div>
      <article className="">
        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(500).height(600).url()}
            alt={post.title}
            className=""
          />
        )}
      </article>
      <h1 className="py-2">{post.subtitle}</h1>
    </Link>
  );
}
