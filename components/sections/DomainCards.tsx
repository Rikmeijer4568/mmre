import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface Domain {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

interface DomainCardsProps {
  title?: string
  subtitle?: string
  domains: Domain[]
}

export function DomainCards({ title, subtitle, domains }: DomainCardsProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            {subtitle && <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">{subtitle}</p>}
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {domains.map((domain, idx) => {
            const content = (
              <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all group h-full">
                <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center mb-4">
                  <domain.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  {domain.title}
                </h3>
                <p className="text-gray-600 text-sm">{domain.description}</p>
                {domain.href && (
                  <div className="mt-4 flex items-center text-accent text-sm font-medium">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </div>
            )

            if (domain.href) {
              return (
                <Link key={idx} href={domain.href} className="block">
                  {content}
                </Link>
              )
            }

            return <div key={idx}>{content}</div>
          })}
        </div>
      </div>
    </section>
  )
}
