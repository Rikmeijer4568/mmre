import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Types
export interface Author {
  _id: string
  name: string
  slug: { current: string }
  image?: SanityImageSource
  bio?: string
  role?: string
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  color?: string
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  author?: Author
  mainImage?: SanityImageSource & { alt?: string }
  categories?: Category[]
  publishedAt: string
  excerpt?: string
  body?: unknown[]
  seoTitle?: string
  seoDescription?: string
}

// Queries
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "author": author->{name, slug, image},
  "categories": categories[]->{_id, title, slug, color}
}`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  body,
  publishedAt,
  seoTitle,
  seoDescription,
  "author": author->{name, slug, image, bio, role},
  "categories": categories[]->{_id, title, slug, color}
}`

export const paginatedPostsQuery = `{
  "posts": *[_type == "post"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    "author": author->{name, slug, image},
    "categories": categories[]->{_id, title, slug, color}
  },
  "total": count(*[_type == "post"])
}`

export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  color
}`

export const postsByCategoryQuery = `*[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "author": author->{name, slug, image},
  "categories": categories[]->{_id, title, slug, color}
}`

// Fetch functions
export async function getPosts(): Promise<Post[]> {
  return client.fetch(postsQuery)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(postBySlugQuery, { slug })
}

export async function getPaginatedPosts(
  page: number = 1,
  perPage: number = 9
): Promise<{ posts: Post[]; total: number }> {
  const start = (page - 1) * perPage
  const end = start + perPage
  return client.fetch(paginatedPostsQuery, { start, end })
}

export async function getCategories(): Promise<Category[]> {
  return client.fetch(categoriesQuery)
}

export async function getPostsByCategory(categoryId: string): Promise<Post[]> {
  return client.fetch(postsByCategoryQuery, { categoryId })
}

// Get recent posts (for sidebar, etc.)
export async function getRecentPosts(limit: number = 5): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage
    }`,
    { limit }
  )
}
