import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '../lib/sanity.image'

export default function PostContent({ body = [], gallery = [] }) {  const components = {
    types: {
      image: ({ value }) => (
        <div className="my-10">
          <Image
            src={urlForImage(value).width(1000).url()}
            alt={value.alt || ''}
            width={1000}
            height={600}
            className="rounded-xl mx-auto"
          />
          {value.alt && (
            <p className="text-center text-sm text-gray-500 mt-2">{value.alt}</p>
          )}
        </div>
      ),
      galleryImageRef: ({ value }) => {
        const image = gallery?.[value.imageIndex]
        if (!image?.asset) return null

        return (
          <div className="my-10">
            <Image
              src={urlForImage(image).width(1000).url()}
              alt={image.alt || ''}
              width={1000}
              height={600}
              className="rounded-xl mx-auto"
            />
            {image.alt && (
              <p className="text-center text-sm text-gray-500 mt-2">{image.alt}</p>
            )}
          </div>
        )
      },
    },
  }

  return (
    <div className="prose prose-lg max-w-4xl mx-auto px-4">
      <PortableText value={body} components={components} />
    </div>
  )
}
