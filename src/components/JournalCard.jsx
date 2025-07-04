import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";

export default function BlogCard({ post }) {
  return (
    <Link href={`/journal/${post.slug.current}`} className="">
      <article className="">
        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(400).height(600).url()}
            alt={post.title}
            className=""
          />
        )}
        <div className="">
          <h1 className="">{post.title}</h1>
        </div>
      </article>
    </Link>
  );
}