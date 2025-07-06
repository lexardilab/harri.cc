import { client } from '@/app/lib/sanity'
import ProductCard from '../../components/ProductCard'

async function getProducts() {
  const query = `*[_type == "product"] | order(publishedAt desc) {
    title,
    prize,
    slug,
    mainImage,
  }`
  return await client.fetch(query)
}

export default async function BlogPage() {
  const products = await getProducts()

  return (
    <div className="pb-6">
      <div className="grid grid-cols-4 px-2 gap-2">
        {products.map((product) => (
          <ProductCard key={product.slug.current} product={product} />
        ))}
      </div>
    </div>
  )
}