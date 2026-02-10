'use client'

import { PortableText as PortableTextComponent } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface ImageValue {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

interface LinkValue {
  _type: 'link'
  href: string
  blank?: boolean
}

const components = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <figure className="my-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={urlFor(value).width(1200).height(675).url()}
              alt={value.alt || 'Blog image'}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-accent pl-4 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value: LinkValue }) => {
      const target = value.blank ? '_blank' : undefined
      const rel = value.blank ? 'noopener noreferrer' : undefined
      return (
        <a
          href={value.href}
          target={target}
          rel={rel}
          className="text-accent hover:underline"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="ml-4">{children}</li>
    ),
  },
}

interface PortableTextProps {
  value: PortableTextBlock[]
}

export function PortableText({ value }: PortableTextProps) {
  return <PortableTextComponent value={value} components={components} />
}
