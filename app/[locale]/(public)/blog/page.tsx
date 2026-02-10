import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { getPaginatedPosts, getCategories, urlFor, type Post, type Category } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Blog - Real Estate & Relocation Insights | MMRE',
  description: 'Stay informed with MMRE\'s blog. Read about Amsterdam real estate, relocation tips, neighborhood guides, and expat life in the Netherlands.',
}

// Revalidate every hour
export const revalidate = 3600

interface BlogPageProps {
  searchParams: Promise<{ page?: string; category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const currentPage = Number(params.page) || 1
  const perPage = 9

  const [{ posts, total }, categories] = await Promise.all([
    getPaginatedPosts(currentPage, perPage),
    getCategories(),
  ])

  const totalPages = Math.ceil(total / perPage)

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">Blog</h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, guides, and tips about real estate, relocation, and life in Amsterdam
          </p>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-white hover:bg-accent-dark transition-colors"
            >
              All Posts
            </Link>
            {categories.map((category: Category) => (
              <Link
                key={category._id}
                href={`/blog?category=${category.slug.current}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {category.title}
              </Link>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post: Post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage <= 1}
              asChild={currentPage > 1}
            >
              {currentPage > 1 ? (
                <Link href={`/blog?page=${currentPage - 1}`}>
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Link>
              ) : (
                <span>
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </span>
              )}
            </Button>

            <div className="flex items-center gap-1 px-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={`/blog?page=${page}`}
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                    page === currentPage
                      ? 'bg-accent text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </Link>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              disabled={currentPage >= totalPages}
              asChild={currentPage < totalPages}
            >
              {currentPage < totalPages ? (
                <Link href={`/blog?page=${currentPage + 1}`}>
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              ) : (
                <span>
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </span>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

function BlogCard({ post }: { post: Post }) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <Link href={`/blog/${post.slug.current}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden">
        {/* Featured Image */}
        <div className="aspect-[16/10] relative overflow-hidden">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).width(600).height(375).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              <span className="text-accent/40 text-4xl font-bold">MMRE</span>
            </div>
          )}
        </div>

        <CardContent className="p-4 sm:p-6">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.slice(0, 2).map((category: Category) => (
                <span
                  key={category._id}
                  className={`px-2 py-0.5 rounded text-xs font-medium ${
                    category.color || 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-accent transition-colors mb-2 line-clamp-2">
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
          )}

          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              {post.author && (
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
              )}
              {formattedDate && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
              )}
            </div>
            <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
