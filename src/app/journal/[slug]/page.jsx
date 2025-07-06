import { client, urlFor } from '../../lib/sanity'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Función para obtener un post específico
async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    body,
    author->{
      name,
      image
    },
    categories[]->{
      title
    }
  }`
  
  const post = await client.fetch(query, { slug })
  return post
}

// Función para obtener todos los slugs (para generateStaticParams)
async function getAllPostSlugs() {
  const query = `*[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }`
  
  const posts = await client.fetch(query)
  return posts
}

// Componentes personalizados para PortableText
const components = {
  types: {
    image: ({ value }) => (
      <div className="my-8">
        <img
          src={urlFor(value).width(800).height(400).url()}
          alt={value.alt || 'Imagen del artículo'}
          className="w-full rounded-lg shadow-lg"
        />
        {value.caption && (
          <p className="mt-2 text-sm italic text-center text-gray-600">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="mt-8 mb-4 text-3xl font-bold text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-6 mb-3 text-2xl font-bold text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-5 mb-3 text-xl font-bold text-gray-900">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="py-2 pl-4 my-6 italic text-gray-600 border-l-4 border-blue-500 bg-gray-50">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-700">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 space-y-2 text-gray-700 list-disc list-inside">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 space-y-2 text-gray-700 list-decimal list-inside">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
}

// Generar parámetros estáticos para mejor rendimiento
export async function generateStaticParams() {
  const posts = await getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generar metadata dinámicamente
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post no encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    },
  }
}

// Componente principal de la página
export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header del post */}
      <div className="bg-white shadow-sm">
        <div className="container px-4 py-6 mx-auto">
          
          
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="mb-6 text-xl leading-relaxed text-gray-600">
                {post.excerpt}
              </p>
            )}
            
            
          </div>
        </div>
      </div>

      {/* Imagen principal */}
      {post.mainImage && (
        <div className="relative w-full h-64 overflow-hidden md:h-96">
          <img
            src={urlFor(post.mainImage).width(1200).height(600).url()}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Contenido del post */}
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <article className="p-8 bg-white rounded-lg shadow-sm md:p-12">
            <div className="prose prose-lg max-w-none">
              {post.body && (
                <PortableText
                  value={post.body}
                  components={components}
                />
              )}
            </div>
          </article>
          
          {/* Navegación adicional */}
          
        </div>
      </div>
    </div>
  )
}