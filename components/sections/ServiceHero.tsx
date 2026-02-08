import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Breadcrumb {
  label: string
  href: string
}

interface ServiceHeroProps {
  title: string
  subtitle: string
  breadcrumbs?: Breadcrumb[]
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

export function ServiceHero({
  title,
  subtitle,
  breadcrumbs,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: ServiceHeroProps) {
  return (
    <section className="relative bg-accent text-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1 text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{title}</h1>
          <p className="mt-6 text-xl text-gray-200">{subtitle}</p>
          {(ctaLabel || secondaryCtaLabel) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {ctaLabel && ctaHref && (
                <Button size="lg" className="bg-primary-50 text-accent hover:bg-primary-100" asChild>
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
