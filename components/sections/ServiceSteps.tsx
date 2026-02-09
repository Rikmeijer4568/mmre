interface Step {
  title: string
  description: string
  details?: string[]
}

interface ServiceStepsProps {
  title?: string
  subtitle?: string
  steps: Step[]
  variant?: 'vertical' | 'horizontal'
}

export function ServiceSteps({
  title = 'How It Works',
  subtitle,
  steps,
  variant = 'vertical',
}: ServiceStepsProps) {
  if (variant === 'horizontal') {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            {subtitle && <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">{subtitle}</p>}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">{subtitle}</p>}
        </div>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex gap-4 sm:gap-6 pb-8 sm:pb-12 last:pb-0">
              {/* Timeline line */}
              {idx < steps.length - 1 && (
                <div className="absolute left-4 sm:left-5 top-10 sm:top-12 bottom-0 w-px bg-gray-200" />
              )}
              {/* Step number */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm z-10">
                {idx + 1}
              </div>
              {/* Content */}
              <div className="flex-1 pb-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {step.details && step.details.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-accent/40 rounded-full mt-1.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
