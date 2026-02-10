import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowLeft, Tag, MessageCircle } from 'lucide-react'
import { getPostBySlug, getPosts, getRecentPosts, urlFor, type Post, type Category } from '@/lib/sanity'
import { PortableText } from '@/components/blog/PortableText'
import { getWhatsAppLink } from '@/lib/whatsapp'

// Revalidate every hour
export const revalidate = 3600

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | MMRE Blog',
    }
  }

  const title = post.seoTitle || post.title
  const description = post.seoDescription || post.excerpt || `Read ${post.title} on the MMRE blog`

  return {
    title: `${title} | MMRE Blog`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: post.mainImage
        ? [
            {
              url: urlFor(post.mainImage).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: post.mainImage.alt || post.title,
            },
          ]
        : undefined,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post: Post) => ({
    slug: post.slug.current,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const [post, recentPosts] = await Promise.all([
    getPostBySlug(slug),
    getRecentPosts(5),
  ])

  if (!post) {
    notFound()
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <article className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-600 hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Blog
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <header className="mb-8">
              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category: Category) => (
                    <span
                      key={category._id}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        category.color || 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                {post.author && (
                  <div className="flex items-center gap-2">
                    {post.author.image && (
                      <Image
                        src={urlFor(post.author.image).width(32).height(32).url()}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <span className="font-medium text-gray-900">{post.author.name}</span>
                      {post.author.role && (
                        <span className="text-gray-500 ml-1">• {post.author.role}</span>
                      )}
                    </div>
                  </div>
                )}
                {formattedDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formattedDate}</span>
                  </div>
                )}
              </div>
            </header>

            {/* Featured Image */}
            {post.mainImage && (
              <div className="aspect-[16/9] relative overflow-hidden rounded-xl mb-8">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(675).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.body && <PortableText value={post.body} />}
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 sm:p-8 bg-highlight rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Questions about this topic?
              </h3>
              <p className="text-gray-600 mb-4">
                Our team is happy to help. Reach out via WhatsApp for a quick response.
              </p>
              <Button variant="whatsapp" asChild>
                <a
                  href={getWhatsAppLink('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat with us
                </a>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0">
            {/* Author Card */}
            {post.author && (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                    About the Author
                  </h3>
                  <div className="flex items-start gap-4">
                    {post.author.image && (
                      <Image
                        src={urlFor(post.author.image).width(64).height(64).url()}
                        alt={post.author.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">{post.author.name}</p>
                      {post.author.role && (
                        <p className="text-sm text-gray-500">{post.author.role}</p>
                      )}
                    </div>
                  </div>
                  {post.author.bio && (
                    <p className="mt-4 text-sm text-gray-600">{post.author.bio}</p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Recent Posts */}
            {recentPosts.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts
                      .filter((p: Post) => p._id !== post._id)
                      .slice(0, 4)
                      .map((recentPost: Post) => (
                        <Link
                          key={recentPost._id}
                          href={`/blog/${recentPost.slug.current}`}
                          className="flex gap-3 group"
                        >
                          {recentPost.mainImage && (
                            <div className="w-16 h-16 relative flex-shrink-0 rounded overflow-hidden">
                              <Image
                                src={urlFor(recentPost.mainImage).width(64).height(64).url()}
                                alt={recentPost.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-accent transition-colors line-clamp-2">
                              {recentPost.title}
                            </h4>
                            {recentPost.publishedAt && (
                              <p className="text-xs text-gray-500 mt-1">
                                {new Date(recentPost.publishedAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                })}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </aside>
        </div>
      </div>
    </article>
  )
}
