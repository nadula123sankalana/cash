'use client'

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'Simple Application',
      description: 'Fill out our quick online form with minimal information required',
      features: [
        'No complicated paperwork',
        'Minimal documentation needed',
        'Complete in minutes',
      ],
    },
    {
      number: '02',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Fast Approval',
      description: 'Get a decision faster than traditional lending methods',
      features: [
        '24-hour approval process',
        'Streamlined evaluation',
        'Quick decision turnaround',
      ],
    },
    {
      number: '03',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Receive Funds',
      description: 'Access your capital quickly and start growing your business',
      features: [
        'Direct deposit to your account',
        'Funds available immediately',
        'Use for any business purpose',
      ],
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Get the working capital you need with our streamlined funding process. Quick approvals, flexible terms, and funding tailored to your business needs.
          </p>
          
          {/* Informational Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 rounded-full border border-blue-100 shadow-sm">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-blue-900 font-semibold text-sm md:text-base">
              No Hard Credit Check Required
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 lg:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Square Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-105 transition-all duration-300">
                {step.icon}
              </div>
              
              {/* Step Number Badge */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">{step.number}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-base">
                {step.description}
              </p>
              
              {/* Feature List with Checkmarks */}
              <ul className="space-y-3">
                {step.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
