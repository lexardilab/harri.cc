import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";

export default function ProductCard({ product }) {
  return (
    <Link href={`/tienda/${product.slug.current}`} className="">
      <article className="">
        {product.mainImage && (
          <img
            src={urlFor(product.mainImage).width(400).height(600).url()}
            alt={product.title}
            className=""
          />
        )}
        <div className="">
          <h1 className="">{product.title}</h1>
        </div>
      </article>
    </Link>
  );
}