import { client, urlFor } from "../../lib/sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProductOptions from '../../../components/ProductOptions';

// Obtener un producto
async function getProduct(slug) {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    title,
    slug,
    prize,
    sizes,
    colors,
    excerpt,
    mainImage {
      asset->{ url }
    },
    gallery {
      images[]{
        alt,
        asset->{
          _id,
          url
        }
      }
    },
    body,
  }`;

  const product = await client.fetch(query, { slug });
  return product;
}

async function getAllProductSlugs() {
  const query = `*[_type == "product" && defined(slug.current)] {
    "slug": slug.current
  }`;

  return await client.fetch(query);
}

export async function generateStaticParams() {
  const products = await getAllProductSlugs();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const product = await getProduct(params.slug);

  if (!product) {
    return { title: "Producto no encontrado" };
  }

  return {
    title: product.title,
    description: product.excerpt,
    openGraph: {
      title: product.title,
      description: product.excerpt,
      images: product.mainImage
        ? [urlFor(product.mainImage).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const product = await getProduct(params.slug);

  if (!product) {
    return notFound();
  }
  return (
      <div>
      {/* Galería */}
      {product.gallery?.images?.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0rem" }}>
          {product.gallery.images.map((img) => (
            <div key={img.asset._id} style={{ width: "550px" }}>
              <Image
                src={img.asset.url}
                alt={img.alt || `Imagen de ${product.title}`}
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Título y precio */}
      <div className="px-2 flex items-center gap-12 pt-4 pb-4">
        <h1 className="text-xl font-bold leading-tight">{product.title}</h1>
        <h1 className="text-xl font-bold leading-tight">{product.prize} €</h1>
        <ProductOptions product={product} />

      </div>

      {/* Opciones (color, talla, galería por color, etc) */}
    </div>

    )}