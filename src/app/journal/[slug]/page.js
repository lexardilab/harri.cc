// app/post/[slug]/page.js
import { client } from '@/lib/sanity'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

async function getData(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    body,
    publishedAt
  }`
  
  const data = await client.fetch(query, { slug })
  return data
}

export default async function Post({ params }) {
  const post = await getData(params.slug)
  
  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-5">{post.title}</h1>
      <p className="text-gray-500 mb-5">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      
      {post.mainImage && (
        <div className="relative h-80 w-full mb-8">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>
    </div>
  )
}