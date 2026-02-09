import { type LucideIcon } from 'lucide-react'

interface AudienceSegment {
  icon: LucideIcon
  title: string
  description: string
}

interface TargetAudienceProps {
  title?: string
  subtitle?: string
  segments: AudienceSegment[]
}

export function TargetAudience({
  title = 'Who Is This For?',
  subtitle,
  segments,
}: TargetAudienceProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {segments.map((segment, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-highlight rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <segment.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{segment.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
