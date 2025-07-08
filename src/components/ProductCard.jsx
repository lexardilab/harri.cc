import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link href={`/tienda/${product.slug.current}`} className="">
      <article className="">
        {product.mainImage && (
          <Image
          src={urlFor(product.mainImage).width(400).height(600).url()}
          alt={product.title || "Product image"}
          width={400}
          height={600}
          className="w-full object-cover"
        />
        )}
        <div className="">
          <h1 className="">{product.title}</h1>
        </div>
      </article>
    </Link>
  );
}